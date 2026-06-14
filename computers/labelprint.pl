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
$o_spl->print_ascii(25,225, 1, 1, "M", "surface7b");
$o_spl->print_qr(110, 465, "Q", 3, 'https://himor.in/computers/?surface7b');
$o_spl->finish_page(1);

my $tfname = "surface7b.dat";
open(my $fh, ">" . $tfname);
$o_spl->output($fh);
close($fh);

exit;

