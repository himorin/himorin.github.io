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
$params = decode_json($config_text);

$o_spl->init_page(256, 392, "shiftjis");
$o_spl->print_ascii(25,225, 1, 1, "M", "surface7b")
$o_spl->print_qr(110, 465, "Q", 3, 'https://himor.in/computers/?surface7b');
$o_spl->finish_page(1);

open(my $fh, ">" . $O_FILE);
$o_spl->output($fh);
close($O_FILE);

exit;

