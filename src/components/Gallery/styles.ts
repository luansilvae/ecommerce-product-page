import styled, { css } from 'styled-components'

export const Container = styled.div<{ modalPreview: boolean }>`
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

      ${props =>
        props.modalPreview
          ? css`
              @media (min-width: 768px) {
                transition: all 200ms ease-in-out;
                &:hover {
                  ::after {
                    color: var(--primary);
                  }
                }
              }
            `
          : css`
              @media (min-width: 768px) {
                visibility: hidden;
              }
            `}
    }

    .itemSlide {
      width: 100%;
      height: 100%;

      ${props =>
        !props.modalPreview &&
        css`
          cursor: zoom-in;
        `}

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
        opacity: 0.5;
      }
    }

    .itemSlide {
      height: 88px;
      width: 88px;
      cursor: pointer;
      border-radius: 15px;
      background: #ffffffee;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 15px;
      }
    }
  }
`
