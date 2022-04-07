import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 400px;
  }

  @media (min-width: 1024px) {
    width: 500px;
  }

  .sneakerSlide {
    width: 100%;
    height: 300px;

    @media (min-width: 768px) {
      border-radius: 15px;
      height: 400px;
    }

    @media (min-width: 1024px) {
      height: 500px;
    }

    .swiper-button-next,
    .swiper-button-prev {
      background: white;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;

      ::after {
        font-size: 15px;
        font-weight: 900;
        color: var(--black);
      }

      @media (min-width: 768px) {
        visibility: hidden;
      }
    }

    .itemSlide {
      width: 100%;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .thumbSlide {
    @media (max-width: 768px) {
      display: none;
    }

    margin-top: 20px;

    .swiper-slide-thumb-active {
      img {
        transition: all 200ms ease-in-out;
        opacity: 0.6;
      }
    }

    .itemSlide {
      height: 88px;
      width: 88px;
      cursor: pointer;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 15px;
      }
    }
  }
`
