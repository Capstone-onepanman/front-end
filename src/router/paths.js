/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */
export default [
  {
    path: '/home',
    name: 'Home',
    // Relative to /src/views
    view: 'Home'
  },
  {
    path: '/game',
    name: 'Game',
    view: 'Game'
  },
  {
    path: '/ranking',
    name: 'Ranking',
    view: 'Ranking'
  },
  {
    path: '/community',
    view: 'Community'
  },
  {
    path: '/help',
    view: 'Help'
  },
  {
    path: '/game/problems',
    view: 'Problems',
    name: 'Problems'
  },
  {
    path: '/game/problems/problemIdx:idx',
    view: 'Solutions',
    name: 'Solutions'
  },
  {
    path: '/game/fight',
    name: 'Fight',
    view: 'Fight'
  },
  {
    path: '/game/replay',
    name: 'Replay',
    view: 'Replay'
  },
  {
    path: '/userprofile',
    name: 'UserProfile',
    view: 'UserProfile'
  }
]
