export const entrada = (diretion: string, delay: number) => {
  return {
    opHidden: {
      opacity: 0,
      x: diretion === "right" ? 80 : diretion === "left" ? -80 : 0,
      y: diretion === "top" ? -80 : diretion === "bottom" ? 80 : 0,
    },
    opacity:{
        opacity: 0,
        transition: {
          type: "tween",
          duration: 1.2,
          delay: delay,
          ease: [0.25, 0.25, 0.1, 0.75],
        },
    },
    hidden: {
      x: diretion === "right" ? 80 : diretion === "left" ? -80 : 0,
      y: diretion === "top" ? -80 : diretion === "bottom" ? 80 : 0,
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.1, 0.75],
      },
    },
  };
};
