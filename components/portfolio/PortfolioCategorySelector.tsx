'use client';

import React, { useState, useEffect, useRef } from 'react';
import PortfolioCategoryTile from '@/components/portfolio/PortfolioCategoryTile';
import ScrollButton from '@/components/ScrollButton';

export default function PortfolioCategorySelector({ 
    translations: t, 
    categories,
    onCategoryChange,
  }: { 
    translations: any,
    categories: PortfolioCategory[],
    onCategoryChange: (category: string) => void,
  }) {

  const scrollRef = useRef<HTMLDivElement>(null);
  const [visibleScrollButton, setVisibleScrollButton] = useState('none');
  
  const [selectedCategory, setSelectedCategory] = useState('discovery');
  const [categoriesStyle, setCategoriesStyle] = useState({
    opacity: 'opacity-0',
    transition: '',
    delay: 0,
  });

  useEffect(() => {
    window.addEventListener('resize', onScroll);
  });

  useEffect(() => {
    setSelectedCategory('discovery');
    setCategoriesStyle({
      opacity: 'opacity-0',
      transition: '',
      delay: 0,
    });
    setTimeout(() => {
      setCategoriesStyle({
        opacity: 'opacity-100',
        transition: 'transition-opacity duration-300',
        delay: 200,
      });
    }, 300);
    setTimeout(() => {
      const container = scrollRef.current;
      if (container) {
        onScroll();
      }
    }, categories.length * 200);
  }, [categories]);

  const selectCategory = (category: string) => {
    if (category === selectedCategory) return;

    setCategoriesStyle({
      opacity: 'opacity-100',
      transition: 'transition-opacity duration-300',
      delay: 0,
    });
    setSelectedCategory(category);
    onCategoryChange(category);
  };

  const onScroll = () => {
    const container = scrollRef.current;
    if (container) {
      if (container.scrollWidth !== container.clientWidth) {
        if (container.scrollLeft === 0) {
          setVisibleScrollButton('right');
        } else if (container.scrollLeft === (container.scrollWidth - container.clientWidth)) {
          setVisibleScrollButton('left');
        } else {
          setVisibleScrollButton('both');
        }
      } else {
        setVisibleScrollButton('none');
      }
    }
  }

  const scrollTo = (buttonDirection: string) => {
    const container = scrollRef.current;
    if (container) {
      container.scrollTo({
        left: buttonDirection === 'right' ? container.scrollWidth : 0,
        behavior: 'smooth',
      });
    }
  }

  return (
    <div className="flex relative">
      <ScrollButton 
        isVisible={['left', 'both'].includes(visibleScrollButton)} 
        direction={'left'} 
        onClick={scrollTo}
      />
      <div 
        className="flex overflow-x-auto py-5 lg:p-10 scrollbar-hide" 
        ref={scrollRef} 
        onScroll={onScroll}
      >
        <div className="flex gap-5 text-white">
          {categories.map((category: PortfolioCategory, index: number) => (
            <div 
              key={index}
              className={`
                cursor-pointer
                ${categoriesStyle.transition}
                ${categoriesStyle.opacity}
              `} 
              style={{ transitionDelay: `${index * categoriesStyle.delay}ms` }} 
              onClick={() => selectCategory(category.id)}
            >
              <PortfolioCategoryTile 
                name={t[category.id]} 
                picture={category.picture} 
                background={category.background}
                isSelected={selectedCategory === category.id || selectedCategory === 'discovery'}
              />
            </div>
          ))}
        </div>
      </div>
      <ScrollButton 
        isVisible={['right', 'both'].includes(visibleScrollButton)} 
        direction={'right'} 
        onClick={scrollTo}
      />
    </div>
  );
}