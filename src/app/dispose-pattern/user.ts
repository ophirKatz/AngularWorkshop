import { using } from 'using-statement';
import { FileResource } from './some-resource';

// Without using
{
  // First, define our resource
  const file = new FileResource('hello.txt');
  // Do some work with file...
  file.dispose();
}




// With using
{
  // First, define our resource
  const file = new FileResource('hello.txt');
  using(file, (f: FileResource) => {
    // Do some work with f...
  });
  // After the using call, the file resource is disposed.
}
