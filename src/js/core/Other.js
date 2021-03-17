const Other = {
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  },
  render(view) {
    document.body.innerHTML = view;
    router();
  },
};

export default Other;
