/*
 * Copyright (c) 2020 The Web eID Project
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

export default interface AuthenticateOptions {
  /**
   * Authentication challenge GET request URL
   *
   * This URL should respond to a GET request with a cryptographic nonce.
   * The request will be made by the browser extension. The extension will
   * use this nonce to generate an authentication token.
   *
   * @example
   *   // Example response from the server
   *   {"nonce": "<nonce>"}
   */
  getAuthChallengeUrl: string;

  /**
   * Authentication token POST request URL
   *
   * This URL should accept a JSON payload via a POST request which contains
   * the authentication token generated by the browser extension.
   *
   * After the server validates the token,the server should respond
   * with a 2xx status code and an optional JSON payload.
   *
   * If the provided token was invalid or the user should be forbidden access
   * for a different reason, the server should respond with an appropriate
   * HTTP error status code and an optional JSON payload.
   *
   * The authenticate method will resolve or reject with
   * the optional JSON payload if the server chooses to provide it.
   *
   * @example
   *   // Example request payload
   *   {"token": "<base64 openid-x509 token JWT>"}
   */
  postAuthTokenUrl: string;

  /**
   * Headers to append to the requests.
   */
  headers?: {
    [key: string]: string;
  };

  /**
   * Time in milliseconds before a user interaction, for example PIN entry, times out.
   *
   * When not specified, defaults to 2 minutes.
   */
  userInteractionTimeout?: number;

  /**
   * Time in milliseconds before a server request, for example auth challenge request, times out.
   *
   * When not specified, defaults to 20 seconds.
   */
  serverRequestTimeout?: number;
}
