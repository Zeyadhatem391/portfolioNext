
export const playSound = (name: string) => {
  const audio = new Audio(`/sounds/${name}`);

  audio.volume = 0.4;

  audio.play().catch(() => {
   
  });
};