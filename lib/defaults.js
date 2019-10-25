const types = {
  chore: {
    description: '生成过程或辅助工具更改',
    value: 'chore'
  },
  ci: {
    description: '与CI相关的更改',
    value: 'ci'
  },
  docs: {
    description: '仅文档更改',
    value: 'docs'
  },
  feat: {
    description: '新特性',
    value: 'feat'
  },
  fix: {
    description: '修复BUG',
    value: 'fix'
  },
  perf: {
    description: '提高性能的代码更改',
    value: 'perf'
  },
  refactor: {
    description: '既不修复错误也不添加功能的代码更改(重构)',
    value: 'refactor'
  },
  release: {
    description: '创建发布提交',
    value: 'release'
  },
  style: {
    description: '标记、空白、格式、缺少分号…',
    value: 'style'
  },
  test: {
    description: '添加缺少的测试',
    value: 'test'
  }
};

// https://github.com/angular/angular/blob/master/CONTRIBUTING.md#type
const list = [
  'test',
  'feat',
  'fix',
  'chore',
  'docs',
  'refactor',
  'style',
  'ci',
  'perf'
];

// https://github.com/angular/angular/blob/master/CONTRIBUTING.md#scope
const scopes = [
];

const questions = [
  'type',
  'scope',
  'subject',
  'body',
  'breaking',
  'issues',
  'lerna'
];

module.exports = {
  breakingChangePrefix: '🧨 ',
  closedIssuePrefix: '✅ ',
  list,
  maxMessageLength: 64,
  minMessageLength: 3,
  questions,
  scopes,
  types
};
