'use strict'
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value)
          })
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value))
        } catch (e) {
          reject(e)
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value))
        } catch (e) {
          reject(e)
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected)
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next())
    })
  }
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const mongoose_1 = __importDefault(require('mongoose'))
// Define the ACCOUNT class
class ACCOUNT {
  constructor() {
    // Initialize the USER object with default values
    this.USER = {
      url: process.env.MONGO_URL || '',
      name: process.env.MONGO_USERNAME || '',
      password: process.env.MONGO_PASSWORD || '',
    }
    // Replace the placeholders in the MongoDB URL with USER's name and password
    this.mongo_url = this.USER.url
      .replace('<username>', this.USER.name)
      .replace('<password>', this.USER.password)
  }
  // Method to connect to the MongoDB database
  connect() {
    return __awaiter(this, void 0, void 0, function* () {
      try {
        // Connect to the MongoDB database using the constructed URL
        console.log(this.mongo_url)
        yield mongoose_1.default.connect(this.mongo_url).then(() => {
          console.log('Connected to MongoDB')
        })
      } catch (error) {
        // Handle any connection error by throwing it
        throw error
      }
    })
  }
}
// Export the ACCOUNT class to make it available for use in other parts of the application
function main() {
  return __awaiter(this, void 0, void 0, function* () {
    yield new ACCOUNT().connect()
  })
}
// Call the main function to initiate the connection
main()
exports.default = main
