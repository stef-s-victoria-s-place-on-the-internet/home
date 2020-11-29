const TEAM = ['stef.kors@gmail.com', 'doukavictoria@gmail.com', 'knegtel.titus@gmail.com']

export default function({
  $auth
}) {
  if (!$auth.loggedIn) {
    return
  }

  if (!TEAM.includes($auth.user.email)) {
    console.log('❌ user not authorized');
    $auth.logout()
    return
  }
}