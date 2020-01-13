export const modalModule = {
  states: {
    isOpen: false, 
  },
  functions: (self) => ({
    openModal: () => self.setState({ isOpen: true }),
    closeModal: () => self.setState({ isOpen: false }),
  }),
}
