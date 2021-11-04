<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit2c16b988fe4544acf3f71d1bd06d5b6e
{
    public static $files = array (
        '3fc9b858277089bef50a2955fe3d672e' => __DIR__ . '/../..' . '/CrossPlatformCiphers/PHP_CIPHER/index.php',
        'a069c15fd7020cb1a7fe258745431938' => __DIR__ . '/../..' . '/src/cors.php',
    );

    public static $prefixLengthsPsr4 = array (
        't' => 
        array (
            'thiagoalessio\\TesseractOCR\\' => 27,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'thiagoalessio\\TesseractOCR\\' => 
        array (
            0 => __DIR__ . '/..' . '/thiagoalessio/tesseract_ocr/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit2c16b988fe4544acf3f71d1bd06d5b6e::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit2c16b988fe4544acf3f71d1bd06d5b6e::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit2c16b988fe4544acf3f71d1bd06d5b6e::$classMap;

        }, null, ClassLoader::class);
    }
}
