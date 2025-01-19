/**
 * https://animate.style/
 */
import "animate.css";

/**
 * 
import { addAnimation } from "~/utils/animation.client.js";

const addAnimationFn = ({ element, animateName }) => {
  const fn = addAnimation({ element, animateName });
  if (typeof fn === "function") fn();
};
 */

export function addAnimation({ element, animateName }) {
  if (!element || !animateName || import.meta.server) return;

  let isAnimationEnd = false;
  let isListening = false;

  return function () {
    try {
      if (![...element.classList].includes("animate__animated")) {
        element.classList.add("animate__animated");
      }
      if (isAnimationEnd) {
        element.classList.remove(`animate__${animateName}`);
        isAnimationEnd = false;
        return;
      }
      isAnimationEnd = true;
      element.classList.add(`animate__${animateName}`);

      // 若沒有監聽過，則監聽一次
      if (!isListening) {
        window.addEventListener("animationend", () => {
          isAnimationEnd = true;
          isAnimationEnd = false;
          element.classList.remove(`animate__${animateName}`);
        });
      }
    } catch (err) {
      console.error(err);
    }
  };
}
