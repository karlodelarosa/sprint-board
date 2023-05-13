export const SIDEBAR_MENU = [
  { name: 'active_board', title: 'Active Board', url: '/' },
  { name: 'backlog', title: 'Backlog', url: 'backlog' },
  { name: 'roadmap', title: 'Roadmap', url: 'roadmap' },
  { name: 'settings', title: 'Settings', url: 'settings' }
]

export const BOARD_COLUMN_ID = {
  TODO: 1,
  IN_PROGRESS: 2,
  TO_TEST: 3,
  FOR_RELEASE: 4
}

export const TASK_STATUS = [
  { id: BOARD_COLUMN_ID.TODO, title: 'To do' },
  { id: BOARD_COLUMN_ID.IN_PROGRESS, title: 'In progress' },
  { id: BOARD_COLUMN_ID.TO_TEST, title: 'To test' },
  { id: BOARD_COLUMN_ID.FOR_RELEASE, title: 'For Release' }
]