import React from 'react';
import { X } from 'lucide-react';
import { BookingForm } from './BookingForm';
import { Button } from '../ui/Button';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService: {
    item: string;
    price: number;
  } | null;
}

export function BookingModal({ isOpen, onClose, selectedService }: BookingModalProps) {
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!selectedService) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  return (
    <div
      className={`fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className={`bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full p-6 transition-all duration-300 transform ${
          isOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 
            className="text-2xl font-bold text-blue-900 dark:text-blue-100"
            style={{ fontFamily: 'var(--font-arabic), sans-serif' }}
          >
            حجز خدمة {selectedService.item}
          </h2>
          <Button
            variant="secondary"
            onClick={onClose}
            className="!p-2"
            aria-label="إغلاق"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>

        <BookingForm
          serviceName={selectedService.item}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}