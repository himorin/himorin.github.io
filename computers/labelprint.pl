#! /usr/bin/perl

use strict;
use lib '.';
use utf8;
use SatoLabel;
use JSON;

my $o_spl = new SatoLabel;
my $conf = $ARGV[0] || "config.json";

open(INDAT, $conf);
my $config_text;
foreach(<INDAT>) { $config_text .= $_; }
close(INDAT);
my $params = decode_json($config_text);

$o_spl->init_page(256, 392, "shiftjis");
$o_spl->print_xfont(25, 225, 1, 1, 22, "surface7b");
$o_spl->print_ascii(60, 230, 1, 1, "M", "Ci5-1135G7 2.40GHz");
$o_spl->print_ascii(85, 230, 1, 1, "M", "Mem 8G / SSD 512GB");
$o_spl->print_ascii(110, 230, 1, 1, "M", "Surface Pro 7+ 040718110253");
$o_spl->print_ascii(135, 230, 1, 1, "M", "Win11 Pro / Norm");
$o_spl->print_ascii(160, 230, 1, 1, "M", "atsushi");
$o_spl->print_ascii(185, 230, 1, 1, "M", "O365, AdobeCC");
$o_spl->print_qr(150, 505, "Q", 3, 'https://himor.in/computers/?surface7b');
$o_spl->finish_page(1);

my $tfname = "surface7b.dat";
open(my $fh, ">" . $tfname);
$o_spl->output($fh);
close($fh);

exit;

