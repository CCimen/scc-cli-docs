// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeGalaxy from 'starlight-theme-galaxy';

// https://astro.build/config
export default defineConfig({
	site: 'https://scc-cli.dev',
	integrations: [
		starlight({
			title: 'SCC CLI',
			description: 'Run Claude Code safely in Docker sandboxes with team-managed profiles and guardrails',
			logo: {
				src: './src/assets/scc-logo.svg',
				replacesTitle: false,
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/CCimen/scc' },
			],
			plugins: [starlightThemeGalaxy()],
			customCss: ['./src/styles/custom.css'],
			editLink: {
				baseUrl: 'https://github.com/CCimen/scc-docs/edit/main/',
			},
			head: [
				{
					tag: 'script',
					content: `(function(){var t=localStorage.getItem('starlight-theme');if(!t){localStorage.setItem('starlight-theme','light');document.documentElement.dataset.theme='light';}})();`,
				},
			],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ slug: 'getting-started/introduction' },
						{ slug: 'getting-started/installation' },
						{ slug: 'getting-started/quick-start', badge: { text: 'Start', variant: 'success' } },
						{ slug: 'getting-started/core-concepts' },
					],
				},
				{
					label: 'Developer Guide',
					collapsed: false,
					items: [
						{ slug: 'guides/developer/onboarding' },
						{ slug: 'guides/developer/daily-workflow' },
						{ slug: 'guides/developer/sessions' },
						{ slug: 'guides/developer/worktrees' },
						{ slug: 'guides/developer/project-config' },
						{ slug: 'guides/developer/personal-profiles' },
					],
				},
				{
					label: 'Team Leader Guide',
					collapsed: true,
					items: [
						{ slug: 'guides/team-leader/overview' },
						{ slug: 'guides/team-leader/inline-config' },
						{ slug: 'guides/team-leader/gitops-config' },
						{ slug: 'guides/team-leader/managing-plugins' },
						{ slug: 'guides/team-leader/ci-automation' },
					],
				},
				{
					label: 'Organization Admin',
					collapsed: true,
					items: [
						{ slug: 'guides/organization/overview' },
						{ slug: 'guides/organization/config-setup' },
						{ slug: 'guides/organization/security-policies' },
						{ slug: 'guides/organization/delegation' },
						{ slug: 'guides/organization/federation' },
						{ slug: 'guides/organization/safety-net' },
						{ slug: 'guides/organization/exceptions' },
					],
				},
				{
					label: 'CLI Reference',
					collapsed: true,
					items: [
						{ slug: 'reference/cli/overview' },
						{ slug: 'reference/cli/essential' },
						{ slug: 'reference/cli/sessions' },
						{ slug: 'reference/cli/worktree' },
						{ slug: 'reference/cli/team' },
						{ slug: 'reference/cli/config' },
						{ slug: 'reference/cli/governance' },
						{ slug: 'reference/cli/organization' },
						{ slug: 'reference/cli/admin' },
					],
				},
				{
					label: 'Configuration',
					collapsed: true,
					items: [
						{ slug: 'reference/configuration/org-schema' },
						{ slug: 'reference/configuration/team-schema' },
						{ slug: 'reference/configuration/project-schema' },
						{ slug: 'reference/configuration/environment' },
					],
				},
				{
					label: 'Examples',
					collapsed: true,
					items: [
						{ slug: 'examples', label: 'Overview' },
						{
							label: 'Basics',
							items: [
								{ slug: 'examples/basics/minimal' },
								{ slug: 'examples/basics/single-team' },
							],
						},
						{
							label: 'Team Setups',
							items: [
								{ slug: 'examples/team-setups/multi-team' },
								{ slug: 'examples/team-setups/inline-profiles' },
							],
						},
						{
							label: 'Security',
							items: [
								{ slug: 'examples/security/strict' },
								{ slug: 'examples/security/stdio-hardened' },
								{ slug: 'examples/security/safety-net' },
							],
						},
						{
							label: 'Federation',
							items: [
								{ slug: 'examples/federation/github' },
								{ slug: 'examples/federation/hybrid' },
								{ slug: 'examples/federation/full' },
							],
						},
						{
							label: 'Real-World',
							items: [
								{ slug: 'examples/real-world/example-org' },
								{ slug: 'examples/real-world/sundsvall' },
							],
						},
					],
				},
				{
					label: 'Plugins',
					collapsed: true,
					items: [
						{ slug: 'plugins/marketplace' },
						{ slug: 'plugins/safety-net' },
						{ slug: 'plugins/creating' },
					],
				},
				{
					label: 'Architecture',
					collapsed: true,
					items: [
						{ slug: 'architecture/overview' },
						{ slug: 'architecture/config-inheritance' },
						{ slug: 'architecture/security-model' },
						{ slug: 'architecture/governance-model' },
					],
				},
				{
					label: 'Troubleshooting',
					collapsed: true,
					items: [
						{ slug: 'troubleshooting', label: 'Overview' },
						{ slug: 'troubleshooting/common-issues' },
						{ slug: 'troubleshooting/docker' },
						{ slug: 'troubleshooting/federation' },
						{ slug: 'troubleshooting/exceptions' },
						{ slug: 'troubleshooting/plugins' },
						{ slug: 'troubleshooting/getting-help' },
					],
				},
				{ slug: 'reference/glossary', label: 'Glossary' },
			],
		}),
	],
});
