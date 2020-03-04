db.createUser({
  user: 'supersecureadminuser',
  pwd: 'pass1234',
  roles: [
    {
      role: 'readWrite',
      db: 'teamdream'
    }
  ]
});
