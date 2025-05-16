import { create } from "zustand";
import { persist } from 'zustand/middleware';

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  position: string;
  company: string;
  imageUrl: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: string;
}

interface TestimonialState {
  testimonials: Testimonial[];
  addTestimonial: (testimonial: Omit<Testimonial, 'id' | 'status' | 'createdAt'>) => void;
  updateStatus: (id: number, status: Testimonial['status']) => void;
  deleteTestimonial: (id: number) => void;
}

export const useTestimonialStore = create<TestimonialState>()(
  persist(
    (set) => ({
      testimonials: [],
      addTestimonial: (testimonial) =>
        set((state) => ({
          testimonials: [
            ...state.testimonials,
            {
              ...testimonial,
              id: Date.now(),
              status: 'pending',
              createdAt: new Date().toISOString(),
            },
          ],
        })),
      updateStatus: (id, status) =>
        set((state) => ({
          testimonials: state.testimonials.map((t) =>
            t.id === id ? { ...t, status } : t
          ),
        })),
      deleteTestimonial: (id) =>
        set((state) => ({
          testimonials: state.testimonials.filter((t) => t.id !== id),
        })),
    }),
    {
      name: 'testimonials-storage',
    }
  )
);