export enum CheckedEvent {
	CommitComment = 'commit_comment',
	IssueComment = 'issue_comment',
	Issues = 'issues',
	PullRequest = 'pull_request',
	PullRequestReview = 'pull_request_review',
	PullRequestReviewComment = 'pull_request_review_comment',
	PullRequestReviewThread = 'pull_request_review_thread',
	Push = 'push',
	Release = 'release',
}

export enum PackageName {
	Actions = 'actions',
	Builders = 'builders',
	Collection = 'collection',
	DiscordJS = 'discord.js',
	Docgen = 'docgen',
	Proxy = 'proxy',
	ProxyContainer = 'proxy-container',
	Rest = 'rest',
	Scripts = 'scripts',
	Voice = 'voice',
	Website = 'website',
}

export const DiscardVercelComments = process.env.DISCARD_VERCEL_COMMENTS === 'true';
export const VercelBotId = 35613825;
export const DiscardCodecovComments = process.env.DISCARD_CODECOV_COMMENTS === 'true';
export const CodecovBotId = 22429695;