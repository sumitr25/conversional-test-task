export const modalModule = {
  states: (key, initialValue) => ({
    [key]: initialValue, 
  }),
  functions: (self, key) => ({
    openModal: () => self.setState({ [key]: true }),
    closeModal: () => self.setState({ [key]: false }),
  }),
}
