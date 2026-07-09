class CustomerService {
  async login() {}

  async getCustomerCountsByPeriod(period: number) {
    // TODO: replace with a real database query once it's wired up
    return period * 10;
  }
}

export const customerService = new CustomerService();
