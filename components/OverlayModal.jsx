// 'use client';
// import React, { useState, useEffect, useCallback } from 'react';
// import { useRouter } from 'next/navigation';

// const OverlayModal = () => {
//   console.log('OverlayModal render'); // Her render’de yazmalı
//   const router = useRouter();
//   const [triggered, setTriggered] = useState(false);
//   const [isFading, setIsFading] = useState(false);
  
//   const finish = useCallback(() => {
//     console.log('finish çağrıldı'); 
//     if (triggered) return;
//     setTriggered(true);
//     setIsFading(true);
//     setTimeout(() => {
//       console.log('Navigasyona geçiliyor');
//       router.push('/');
//     }, 500);
//   }, [triggered, router]);
  
//   useEffect(() => {
//     console.log('OverlayModal useEffect mount');
//     const handleWheel = (e) => {
//       console.log('wheel event', e.deltaY);
//       finish();
//     };
//     window.addEventListener('wheel', handleWheel, { passive: true });
//     return () => {
//       window.removeEventListener('wheel', handleWheel);
//     };
//   }, [finish]);
  
//   // Sadece test amacıyla, fade ve trigger’ı yok sayıp her render’da yazıyı göster:
//   return (
//     <div className="introOverlay">
//       <img src="/images/konstralab.gif" alt="Intro GIF" className="introGif" />
//       <div className="gifOverlay" />
//       <div className="overlayText">BURASI ORTADA GÖZÜKMELİ</div>
//     </div>
//   );
// };
// export default OverlayModal;
