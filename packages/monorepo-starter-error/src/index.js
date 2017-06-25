"use strict";

import ExtendableError from "es6-error";

export default class MonoRepoError extends ExtendableError {
  constructor(message = "Unspecified Error", data = null) {
    super(message);
    this.data = data;
    this.isMonoRepoError = true;
  }
}
