import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('<h1>Markdown to HTML converter</h1>');
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/html/sample2.md')
      .expect(200)
      .expect(
        `<h1>Header one</h1>\n` +
          ` <p>Hello there</p>\n` +
          ` <p>How are you?</p>\n` +
          ` <p>What's going on?</p>\n` +
          ` <h2>Another header</h2>\n` +
          ` <p>This is a paragraph <a href='http://google.com'>with an inline link</a>. Neat, eh?</p>\n` +
          ` <h2>This is a header <a href='http://yahoo.com'>with a link</a></h2>\n`,
      );
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/html/sampleUnknown.md')
      .expect(500);
  });
});
