<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Profile page</title>
</head>
<body>
    <p>{{$firstSuperAdmin->user_name}}</p>
    <p>{{$firstSuperAdmin->first_name}}</p>
    <p>{{$firstSuperAdmin->last_name}}</p>
    <p>{{$firstSuperAdmin->email}}</p>
    <p>{{$firstSuperAdmin->role}}</p>
</body>
</html>


