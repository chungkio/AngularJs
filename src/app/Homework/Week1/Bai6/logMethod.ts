import * as fs from 'fs';

const logMethodFunction = (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
  const originalMethod = descriptor.value;

  descriptor.value = (...args: any[]) => {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString();

    const logMessage = `[${formattedDate}] Method ${propertyKey} has been called with arguments: ${JSON.stringify(args)}`;

    // Log to console
    console.log(logMessage);

    // Save to file
    ensureLogFileExists();
    fs.appendFileSync('logs.txt', logMessage + '\n');

    return originalMethod.apply(this, args);
  };

  return descriptor;
};

const ensureLogFileExists = () => {
  const logFileName = 'logs.txt';

  if (!fs.existsSync(logFileName)) {
    // If the file doesn't exist, create it
    fs.writeFileSync(logFileName, '');
  }
};

class LogExample {
  @logMethodFunction
  logsMethod(param1: number, param2: number) {
    console.log(`This is the original method: ${param1 + param2}`);
  }
}

const instance = new LogExample();
instance.logsMethod(40, 225);
