export class Article {
  voteUp() {
    throw new Error('Method not implemented.');
  }
  voteDown() {
    throw new Error('Method not implemented.');
  }
  title: string;
  link: string;
  votes: number;

  constructor(title: string, link: string, votes?: number) {
    this.title = title;
    this.link = link;
    this.votes = votes || 0;
  }
    domain(): string | null {
        try {// e.g. http://foo.com/path/to/bar
            const domainAndPath: string = this.link.split('//')[1]; // e.g. foo.com/path/to/bar
            return domainAndPath.split('/')[0];
        }catch (err) {
            return null;
        }
    }}