"use client";
import { useState } from "react";

export default function useModalVideo() {
  const [isOpen, setIsOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const openModal = (url) => {
    setVideoUrl(url);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setVideoUrl("");
  };

  const Modal = () =>
    isOpen ? (
      <div className="video-modal-overlay" onClick={closeModal}>
        <div className="video-modal" onClick={(e) => e.stopPropagation()}>
          <iframe
            width="100%"
            height="100%"
            src={videoUrl.replace("watch?v=", "embed/")}
            title="Video Player"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    ) : null;

  return { Modal, openModal, closeModal };
}
