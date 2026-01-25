// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeGalaxy from 'starlight-theme-galaxy';

const siteUrl = 'https://scc-cli.dev';
const ogImageUrl = `${siteUrl}/og-image.png`;
const socialProfiles = [
	'https://github.com/CCimen',
	'https://www.linkedin.com/in/%C3%A7agri-%C3%A7imen-83106b272/',
];
const structuredData = {
	'@context': 'https://schema.org',
	'@type': 'SoftwareApplication',
	name: 'SCC CLI',
	url: siteUrl,
	description: 'Run Claude Code safely in Docker sandboxes with team-managed profiles and guardrails',
	applicationCategory: 'DeveloperApplication',
	operatingSystem: 'macOS, Windows, Linux',
	sameAs: socialProfiles,
};

// https://astro.build/config
export default defineConfig({
	site: siteUrl,
	integrations: [
		starlight({
			title: 'SCC CLI',
			description: 'Run Claude Code safely in Docker sandboxes with team-managed profiles and guardrails',
			logo: {
				src: './src/assets/scc-logo.svg',
				replacesTitle: false,
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/CCimen' },
				{
					icon: 'linkedin',
					label: 'LinkedIn',
					href: 'https://www.linkedin.com/in/%C3%A7agri-%C3%A7imen-83106b272/',
				},
			],
			plugins: [starlightThemeGalaxy()],
			customCss: ['./src/styles/custom.css'],
			disable404Route: true,
			editLink: {
				baseUrl: 'https://github.com/CCimen/scc-docs/edit/main/',
			},
			head: [
				{
					tag: 'script',
					content: `(function(){var t=localStorage.getItem('starlight-theme');if(!t){localStorage.setItem('starlight-theme','light');document.documentElement.dataset.theme='light';}})();`,
				},
				{
					tag: 'meta',
					attrs: { property: 'og:image', content: ogImageUrl },
				},
				{
					tag: 'meta',
					attrs: { property: 'og:image:alt', content: 'SCC CLI logo' },
				},
				{
					tag: 'meta',
					attrs: { property: 'og:image:width', content: '1200' },
				},
				{
					tag: 'meta',
					attrs: { property: 'og:image:height', content: '630' },
				},
				{
					tag: 'meta',
					attrs: { property: 'og:image:type', content: 'image/png' },
				},
				{
					tag: 'meta',
					attrs: { name: 'twitter:image', content: ogImageUrl },
				},
				{
					tag: 'meta',
					attrs: { name: 'twitter:image:alt', content: 'SCC CLI logo' },
				},
				{
					tag: 'script',
					attrs: { type: 'application/ld+json' },
					content: JSON.stringify(structuredData),
				},
				// Microsoft Clarity analytics
				{
					tag: 'script',
					attrs: { type: 'text/javascript' },
					content: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "v73f2vtedy");`,
				},
			],
			sidebar: [
				// 1. Getting Started - Discovery & orientation
				{
					label: 'Getting Started',
					items: [
						{ slug: 'getting-started/introduction' },
						{ slug: 'getting-started/claude-code-sandbox', label: 'Claude Code Sandbox' },
						{ slug: 'getting-started/installation' },
						{ slug: 'getting-started/quick-start', badge: { text: 'Start', variant: 'success' } },
						{ slug: 'getting-started/core-concepts' },
					],
				},
				// 2. Developer Guide - Most common user type, get productive fast
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
						{ slug: 'guides/developer/settings-tui' },
					],
				},
				// 3. Plugins - Central feature, needed by devs and team leads
				{
					label: 'Plugins',
					collapsed: true,
					items: [
						{ slug: 'plugins/marketplace' },
						{ slug: 'plugins/safety-net' },
						{ slug: 'plugins/creating' },
					],
				},
				// 4. Team Leader Guide - Configure what developers use
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
				// 5. Organization Admin - Highest-level governance
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
				// 6. Wizard Guides - Config tools for leads/admins (after they know their role)
				{
					label: 'Wizard Guides',
					collapsed: true,
					badge: { text: 'New', variant: 'tip' },
					items: [
						{ slug: 'guides/wizard/overview' },
						{ slug: 'guides/wizard/org-config-wizard' },
						{ slug: 'guides/wizard/team-config-wizard' },
						{ slug: 'guides/wizard/explain-wizard' },
						{ slug: 'guides/wizard/validate-wizard' },
					],
				},
				// 7. Use Cases - Help evaluators find their scenario
				{
					label: 'Use Cases',
					collapsed: true,
					items: [
						{ slug: 'use-cases', label: 'Overview' },
						{ slug: 'use-cases/why-sandbox-claude-code' },
						{ slug: 'use-cases/claude-code-in-docker' },
						{ slug: 'use-cases/ai-coding-guardrails' },
					],
				},
				// 8. Comparisons - Decision support after understanding SCC
				{
					label: 'Comparisons',
					collapsed: true,
					items: [
						{ slug: 'comparisons', label: 'Overview' },
						{ slug: 'comparisons/scc-vs-local-claude-code' },
						{ slug: 'comparisons/scc-vs-dev-containers' },
						{ slug: 'comparisons/scc-vs-docker-manual' },
					],
				},
				// 9. Integrations - CI/CD setup (advanced)
				{
					label: 'Integrations',
					collapsed: true,
					items: [
						{ slug: 'integrations', label: 'Overview' },
						{ slug: 'integrations/github-actions' },
						{ slug: 'integrations/gitlab-ci' },
					],
				},
				// 10. Examples - Reference configs by scenario
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
				// 11. Configuration - Schema references for admins
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
				// 12. Architecture - Deep dives for security/evaluators
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
				// 13. CLI Reference - Command lookup
				{
					label: 'CLI Reference',
					collapsed: true,
					items: [
						{ slug: 'reference/cli/overview' },
						{ slug: 'reference/cli/essential' },
						{ slug: 'reference/cli/sessions' },
						{ slug: 'reference/cli/worktree' },
						{ slug: 'reference/cli/team' },
						{ slug: 'reference/cli/profile' },
						{ slug: 'reference/cli/config' },
						{ slug: 'reference/cli/governance' },
						{ slug: 'reference/cli/organization' },
						{ slug: 'reference/cli/admin' },
					],
				},
				// 14. Troubleshooting - Problem-solving
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
				// 15. Glossary - Terminology reference
				{ slug: 'reference/glossary', label: 'Glossary' },
			],
		}),
	],
});
