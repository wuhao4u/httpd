<?xml version="1.0" encoding="ISO-8859-1"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="es" xml:lang="es"><head>
<meta content="text/html; charset=ISO-8859-1" http-equiv="Content-Type" />
<!--
        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
              This file is generated from xml source: DO NOT EDIT
        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
      -->
<title>El Servidor Apache y Programas de Soporte - Servidor HTTP Apache Versi�n 2.5</title>
<link href="../style/css/manual.css" rel="stylesheet" media="all" type="text/css" title="Main stylesheet" />
<link href="../style/css/manual-loose-100pc.css" rel="alternate stylesheet" media="all" type="text/css" title="No Sidebar - Default font size" />
<link href="../style/css/manual-print.css" rel="stylesheet" media="print" type="text/css" /><link rel="stylesheet" type="text/css" href="../style/css/prettify.css" />
<script src="../style/scripts/prettify.min.js" type="text/javascript">
</script>

<link href="../images/favicon.ico" rel="shortcut icon" /></head>
<body id="manual-page" class="no-sidebar"><div id="page-header">
<p class="menu"><a href="../mod/">M�dulos</a> | <a href="../mod/quickreference.html">Directivas</a> | <a href="http://wiki.apache.org/httpd/FAQ">Preguntas Frecuentes</a> | <a href="../glossary.html">Glosario</a> | <a href="../sitemap.html">Mapa del sitio web</a></p>
<p class="apache">Versi�n 2.5 del Servidor HTTP Apache</p>
<img alt="" src="../images/feather.png" /></div>
<div class="up"><a href="../"><img title="&lt;-" alt="&lt;-" src="../images/left.gif" /></a></div>
<div id="path">
<a href="http://www.apache.org/">Apache</a> &gt; <a href="http://httpd.apache.org/">Servidor HTTP</a> &gt; <a href="http://httpd.apache.org/docs/">Documentaci�n</a> &gt; <a href="../">Versi�n 2.5</a></div><div id="page-content"><div id="preamble"><h1>El Servidor Apache y Programas de Soporte</h1>
<div class="toplang">
<p><span>Idiomas disponibles: </span><a href="../en/programs/" hreflang="en" rel="alternate" title="English">&nbsp;en&nbsp;</a> |
<a href="../es/programs/" title="Espa�ol">&nbsp;es&nbsp;</a> |
<a href="../fr/programs/" hreflang="fr" rel="alternate" title="Fran�ais">&nbsp;fr&nbsp;</a> |
<a href="../ko/programs/" hreflang="ko" rel="alternate" title="Korean">&nbsp;ko&nbsp;</a> |
<a href="../tr/programs/" hreflang="tr" rel="alternate" title="T�rk�e">&nbsp;tr&nbsp;</a> |
<a href="../zh-cn/programs/" hreflang="zh-cn" rel="alternate" title="Simplified Chinese">&nbsp;zh-cn&nbsp;</a></p>
</div>

    <p>Esta p�gina contiene toda la documentaci�n sobre los programas
    ejecutables incluidos en el servidor Apache.</p>
</div>
<div class="top"><a href="#page-header"><img alt="top" src="../images/up.gif" /></a></div>
<div class="section">
<h2><a name="index" id="index">�ndice</a><a title="Enlace permanente" href="#index" class="permalink">&para;</a></h2>

    <dl>
      <dt><code class="program"><a href="../programs/httpd.html">httpd</a></code></dt>

      <dd>Servidor Apache del Protocolo de Transmisi�n de
      Hipertexto (HTTP)</dd>

      <dt><code class="program"><a href="../programs/apachectl.html">apachectl</a></code></dt>

      <dd>Interfaz de control del servidor HTTP Apache </dd>

      <dt><code class="program"><a href="../programs/ab.html">ab</a></code></dt>

      <dd>Herramienta de benchmarking del Servidor HTTP Apache</dd>

      <dt><code class="program"><a href="../programs/apxs.html">apxs</a></code></dt>

      <dd>Herramienta de Extensi�n de Apache</dd>

      <dt><code class="program"><a href="../programs/configure.html">configure</a></code></dt>

      <dd>Configuraci�n de la estructura de directorios de Apache</dd>

      <dt><code class="program"><a href="../programs/dbmmanage.html">dbmmanage</a></code></dt>

      <dd>Crea y actualiza los archivos de autentificaci�n de usuarios
      en formato DBM para autentificaci�n b�sica</dd>

      <dt><code class="program"><a href="../programs/fcgistarter.html">fcgistarter</a></code></dt>

      <dd>Ejecuta un programa FastCGI.</dd>

       <dt><code class="program"><a href="../programs/firehose.html">firehose</a></code></dt>

      <dd>Demultiplexa un "firehose" desde <code class="module"><a href="../mod/mod_firehose.html">mod_firehose</a></code></dd>

      <dt><code class="program"><a href="../programs/htcacheclean.html">htcacheclean</a></code></dt>

      <dd>Vac�a la cach� del disco.</dd>

      <dt><code class="program"><a href="../programs/htdigest.html">htdigest</a></code></dt>

      <dd>Crea y actualiza los ficheros de autentificaci�n de usuarios
      para autentificaci�n tipo digest</dd>

      <dt><code class="program"><a href="../programs/htdbm.html">htdbm</a></code></dt>

      <dd>Manipula la base de datos DBM de contrase�as.</dd>

      <dt><code class="program"><a href="../programs/htpasswd.html">htpasswd</a></code></dt>

      <dd>Crea y actualiza los ficheros de autentificaci�n de usuarios
      para autentificaci�n tipo b�sica</dd>

      <dt><code class="program"><a href="../programs/httxt2dbm.html">httxt2dbm</a></code></dt>

      <dd>Crea ficheros dbm para que se usen con RewriteMap</dd>

      <dt><code class="program"><a href="../programs/logresolve.html">logresolve</a></code></dt>

      <dd>Resuelve los nombres de host para direcciones IP que est�n
      en los ficheros log de Apache</dd>

      <dt><code class="program"><a href="../programs/log_server_status.html">log_server_status</a></code></dt>

      <dd>Logea de forma peri�dica el estado del servidor.</dd>

      <dt><code class="program"><a href="../programs/rotatelogs.html">rotatelogs</a></code></dt>

      <dd>Renueva los logs de Apache sin tener que parar el servidor</dd>

      <dt><code class="program"><a href="../programs/split-logfile.html">split-logfile</a></code></dt>

      <dd>Divide un archivo de registro multi-host virtual en 
      	archivos de registro por host</dd>

      <dt><code class="program"><a href="../programs/suexec.html">suexec</a></code></dt>

      <dd>Programa para cambiar la identidad de
      	 usuario con la que se ejecuta un CGI</dd>
  </dl>
</div></div>
<div class="bottomlang">
<p><span>Idiomas disponibles: </span><a href="../en/programs/" hreflang="en" rel="alternate" title="English">&nbsp;en&nbsp;</a> |
<a href="../es/programs/" title="Espa�ol">&nbsp;es&nbsp;</a> |
<a href="../fr/programs/" hreflang="fr" rel="alternate" title="Fran�ais">&nbsp;fr&nbsp;</a> |
<a href="../ko/programs/" hreflang="ko" rel="alternate" title="Korean">&nbsp;ko&nbsp;</a> |
<a href="../tr/programs/" hreflang="tr" rel="alternate" title="T�rk�e">&nbsp;tr&nbsp;</a> |
<a href="../zh-cn/programs/" hreflang="zh-cn" rel="alternate" title="Simplified Chinese">&nbsp;zh-cn&nbsp;</a></p>
</div><div id="footer">
<p class="apache">Copyright 2018 The Apache Software Foundation.<br />Licencia bajo los t�rminos de la <a href="http://www.apache.org/licenses/LICENSE-2.0">Apache License, Version 2.0</a>.</p>
<p class="menu"><a href="../mod/">M�dulos</a> | <a href="../mod/quickreference.html">Directivas</a> | <a href="http://wiki.apache.org/httpd/FAQ">Preguntas Frecuentes</a> | <a href="../glossary.html">Glosario</a> | <a href="../sitemap.html">Mapa del sitio web</a></p></div><script type="text/javascript"><!--//--><![CDATA[//><!--
if (typeof(prettyPrint) !== 'undefined') {
    prettyPrint();
}
//--><!]]></script>
</body></html>