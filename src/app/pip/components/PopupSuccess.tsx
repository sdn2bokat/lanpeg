"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface PopupSuccessProps {
  show: boolean;
  message: string;
  onClose: () => void;
}

export default function PopupSuccess({ show, message, onClose }: PopupSuccessProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black/40 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-2xl p-6 shadow-lg text-center w-[90%] sm:w-[380px]"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <CheckCircle2 className="text-green-500 mx-auto mb-3 w-14 h-14" />
            <p className="text-sm sm:text-base font-semibold text-gray-800">
              {message}
            </p>
            <button
              onClick={onClose}
              className="mt-5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-6 py-2 font-semibold transition cursor-pointer"
            >
              OK
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
