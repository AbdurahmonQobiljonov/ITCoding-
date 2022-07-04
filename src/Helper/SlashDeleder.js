const SlashDeleder = (e) => {
  while (e.includes("/")) {
    e = e.replace("/", " ");
  }
  return e;
};

export default SlashDeleder;
