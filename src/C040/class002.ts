// Builder Design Pattern
/*
The Builder pattern is used to construct complex objects step by step.
It is particularly useful when an object requires multiple initialization parameters or steps to be created.
Instead of initializing the object all at once through a constructor, you can use a builder to
set its properties gradually and then create the object. This approach simplifies
object creation and makes the code more readable and maintainable.
*/

/**
 * The `RequestBuilder` class provides a fluent interface for building HTTP requests.
 * It allows setting various properties in a chainable manner before sending the request.
 */
export class RequestBuilder {
  private method: 'get' | 'post' | null = null; // HTTP method (get or post)
  private url: string | null = null;           // Request URL

  /**
   * Sets the HTTP method for the request.
   * @param method The HTTP method to use ('get' or 'post').
   * @returns The current instance for method chaining.
   */
  setMethod(method: 'get' | 'post'): this {
    this.method = method;
    return this;
  }

  /**
   * Sets the URL for the request.
   * @param url The URL to which the request will be sent.
   * @returns The current instance for method chaining.
   */
  setUrl(url: string): this {
    this.url = url;
    return this;
  }

  /**
   * Sends the request with the configured properties.
   * @throws Will throw an error if the method or URL is not set.
   */
  send(): void {
    if (!this.method || !this.url) {
      throw new Error("Cannot send request: method or URL not set.");
    }
    console.log(`Sending data using ${this.method.toUpperCase()} method to ${this.url}`);
  }
}

// Example usage:
const request = new RequestBuilder()
  .setUrl('http://www.google.com')  // Set the URL for the request
  .setMethod('post')                // Set the HTTP method for the request
  .send();                         // Send the request

// Explanation:
// - `setMethod` and `setUrl` methods allow setting properties of the request in a chainable manner.
// - The `send` method triggers the action of sending the request. It checks if both the method and URL are set, and if not, it throws an error.
// - The use of `this` as the return type allows for method chaining, making the code more fluent and readable.
