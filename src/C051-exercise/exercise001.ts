// Voting (VOTAÇÃO)
type VotingOption = {
  nOfVotes: number;
  option: string;
};

export class Voting {
  private _votingOptions: VotingOption[] = [];
  constructor(public details: string) {}

  addVotingOption(votingOption: VotingOption): void {
    this._votingOptions.push(votingOption);
  }

  vote(votingIndex: number): void {
    if (!this._votingOptions[votingIndex]) return;
    this._votingOptions[votingIndex].nOfVotes += 1;
  }

  get votingOptions(): VotingOption[] {
    return this._votingOptions;
  }
}

export class VotingApp {
  private polls: Voting[] = [];

  addVoting(voting: Voting): void {
    this.polls.push(voting);
  }

  showVoting(): void {
    for (const voting of this.polls) {
      console.log(voting.details);
      for (const votingOption of voting.votingOptions) {
        console.log(votingOption.option, votingOption.nOfVotes);
      }
      console.log('\n#########\n');
    }
  }
}

const vt1 = new Voting('What is your favorite programming language?');
vt1.addVotingOption({ option: 'TypeScript', nOfVotes: 0});
vt1.addVotingOption({ option: 'NodeJS', nOfVotes: 5});
vt1.addVotingOption({ option: 'Java', nOfVotes: 7});
vt1.addVotingOption({ option: 'C#', nOfVotes: 10});
vt1.vote(1);
vt1.vote(1);
vt1.vote(1);
vt1.vote(3);
vt1.vote(3);

const vtMainApp = new VotingApp();
vtMainApp.addVoting(vt1);

vtMainApp.showVoting();
