<!DOCTYPE html>
<html>
<head>
  <base href="<!-- @echo BASE_HREF -->">
  <title></title>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <link rel="stylesheet" href="dist/css/main.css?cache-bust=<!-- @if IS_BUNDLE --><!-- @echo CACHE_BUST --><!-- @endif -->">
</head>
<body>
<div ui-view="" layout-fill=""></div>
<!-- @if IS_BUNDLE -->
<script type="text/javascript" src="dist/app.js?cache-bust=<!-- @echo CACHE_BUST -->"></script>
<!-- @endif -->

<!-- @if !IS_BUNDLE -->
<script type="text/javascript" src="jspm_packages/system.js"></script>
<script type="text/javascript" src="config.js"></script>
<script type="text/javascript">
  System.import('bootstrap');
</script>
<!-- @endif -->
</body>
</html>
