import app from './app';

const server = app.listen(3000, () => {
  console.log(
    '  App is running at http://localhost:%d in %s mode',
    3000,
    'dev',
  );
  console.log('  Press CTRL-C to stop\n');
});

export default server;