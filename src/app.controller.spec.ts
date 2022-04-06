import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MarkdownReaderModule } from './markdownreader/markdownreader.module';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
      imports: [MarkdownReaderModule],
    }).compile();

    appController = app.get<AppController>(AppController);
    appService = app.get<AppService>(AppService);
  });

  describe('test endpoints', () => {
    it('should return project name', () => {
      expect(appController.getHello()).toBe(
        '<h1>Markdown to HTML converter</h1>',
      );
    });

    it('should return HTML given resource file name', () => {
      expect(appService.getFileOutput('sample1.md')).toBe(
        `<h1>Sample Document</h1>\n <p>Hello!</p>\n <p>This is sample markdown for the <a href='https://www.mailchimp.com'>Mailchimp</a> homework assignment.</p>\n`,
      );
    });

    it('should return HTML given input markdown', () => {
      expect(
        appService.getTextOutput(
          '# h1 Heading\n## h2 Heading\n### h3 Heading\n #### h4 Heading\n##### h5 [Heading](http://www.google.com)\n###### h6 Heading\n# Lorem ipsum \n[Lorem ipsum dolor sit amet](https://loremipsum.io/), consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
        ),
      ).toBe(
        `<h1>h1 Heading</h1> <h2>h2 Heading</h2> <h3>h3 Heading</h3> <p> #### h4 Heading</p> <h5>h5 <a href='http://www.google.com'>Heading</a></h5> <h6>h6 Heading</h6> <h1>Lorem ipsum </h1> <p><a href='https://loremipsum.io/'>Lorem ipsum dolor sit amet</a>, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>`,
      );
    });
  });
});
