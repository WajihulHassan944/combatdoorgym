"use client"

import { useRef, useEffect } from "react"
import Slider from "react-slick"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Product from './../../public/images/pr1.png'
import Image, { StaticImageData } from "next/image"

type Review = {
  id: string
  name: string
  date: string
  rating: number
  title: string
  content: string
  product: string
  productImage: StaticImageData
  isVerified: boolean
}

const reviews: Review[] = [
    {
      id: "1",
      name: "Michael T.",
      date: "05/12/24",
      rating: 5,
      title: "Game Changer for Home Training",
      content:
        "The Combat Door Gym revolutionized my home workouts. As an MMA enthusiast with a busy schedule, this lets me train like I'm at the gym without leaving home. The resistance bands are incredibly durable and the setup takes seconds.",
      product: "Combat Door Gym",
      productImage: Product,
      isVerified: true,
    },
    {
      id: "2",
      name: "Sarah K.",
      date: "04/28/24",
      rating: 5,
      title: "Professional Quality at Home",
      content:
        "After 15 years of boxing, I was skeptical about any home setup. The Combat Door Gym exceeded all expectations! The build quality is exceptional and the door anchor system is rock solid. I can do everything from resistance training to speed work.",
      product: "Combat Door Gym",
      productImage: Product,
      isVerified: true,
    },
    {
      id: "3",
      name: "James R.",
      date: "04/15/24",
      rating: 5,
      title: "Perfect for Fighters",
      content: "As a BJJ practitioner, staying conditioned between classes is crucial. This system lets me work on specific muscle groups that matter for grappling. The variable resistance levels accommodate both strength and endurance training.",
      product: "Combat Door Gym",
      productImage: Product,
      isVerified: true,
    },
    {
      id: "4",
      name: "Elena M.",
      date: "04/03/24",
      rating: 5,
      title: "Compact but Complete",
      content: "Living in a small apartment, I needed something effective but space-saving. The Combat Door Gym packs away in seconds but offers a full-body workout. The resistance is smooth and the handles are comfortable even during long sessions.",
      product: "Combat Door Gym",
      productImage: Product,
      isVerified: true,
    },
    {
      id: "5",
      name: "Carlos D.",
      date: "03/27/24",
      rating: 5,
      title: "Best Investment for Fighters",
      content: "As a striking coach, I recommend this to all my students for home training. The quality is professional-grade and the versatility means you can work on power, speed, and endurance all with one system. Worth every penny.",
      product: "Combat Door Gym",
      productImage: Product,
      isVerified: true,
    },
  ]
  

export function TestimonialCarousel() {
  const sliderRef = useRef<Slider | null>(null)

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,        
    autoplaySpeed: 3000,  
    slidesToShow: 3.6,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  // Use useEffect to ensure all cards have equal height
  useEffect(() => {
    const equalizeCardHeights = () => {
      if (typeof window !== 'undefined') {
        // Reset heights first
        const cards = document.querySelectorAll('.testimonial-card');
        cards.forEach(card => {
          (card as HTMLElement).style.height = 'auto';
        });

        // Find the tallest card
        let maxHeight = 0;
        cards.forEach(card => {
          maxHeight = Math.max(maxHeight, card.getBoundingClientRect().height);
        });

        // Set all cards to the height of the tallest card
        cards.forEach(card => {
          (card as HTMLElement).style.height = `${maxHeight}px`;
        });
      }
    };

    // Run on initial load and window resize
    equalizeCardHeights();
    window.addEventListener('resize', equalizeCardHeights);

    // Setup a mutation observer to watch for DOM changes that might affect card heights
    const observer = new MutationObserver(equalizeCardHeights);
    const container = document.querySelector('.slick-track');
    if (container) {
      observer.observe(container, { childList: true, subtree: true });
    }

    return () => {
      window.removeEventListener('resize', equalizeCardHeights);
      observer.disconnect();
    };
  }, []);

  const goToPrev = () => sliderRef.current?.slickPrev()
  const goToNext = () => sliderRef.current?.slickNext()

  return (
    <section className="py-16 px-4 max-w-[1440px] mx-auto">
      <div className="text-center mb-10">
        <div className="flex items-center justify-center gap-2 mb-2 bg-[#f4f4f4] w-fit mx-auto py-1 px-2 rounded-full">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-5 h-5 fill-[#30d70b] " />
            ))}
          </div>
          <span className="text-base font-semibold">138 reviews</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-semibold">Real Customers, Real Reviews</h2>
      </div>

      <div className="relative mb-6">
        <button
          onClick={goToPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-2xl shadow-black"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="">
          <Slider ref={sliderRef} {...settings}>
            {reviews.map((review) => (
              <div key={review.id} className="px-2">
                <div className="testimonial-card border rounded-lg p-6 flex flex-col justify-between bg-white ">
                  <div>
                    <div className="flex justify-between mb-2">
                      <p className="font-bold">
                        {review.name}{" "}
                        {review.isVerified && (
                          <span className="text-[#6D7588] text-sm">✓ Verified Buyer</span>
                        )}
                      </p>
                      <p className="text-gray-500 text-xs">{review.date}</p>
                    </div>

                    <div className="flex mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-5 h-5 ${
                            star <= review.rating
                              ? "fill-[#30d70b] "
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>

                    <h3 className="font-bold text-lg mb-2">{review.title}</h3>
                    <p className="text-[#2B2B2B] text-sm mb-4">{review.content}</p>
                  </div>

                  <div className="flex items-center mt-4">
                    <div className="w-8 h-8 rounded overflow-hidden mr-2">
                      <Image
                        src={review.productImage}
                        alt={review.product}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-sm text-gray-600">{review.product}</span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-2xl shadow-black"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

    </section>
  )}