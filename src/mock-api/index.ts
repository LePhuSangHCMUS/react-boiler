export const fakeRequest = (body: any) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(body), 1500);
    });
  };
  