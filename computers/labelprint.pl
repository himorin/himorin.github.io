#! /usr/bin/perl

use strict;
use lib '.';
use utf8;
use SatoLabel;
use JSON;

use constant ITEMS => 'items.json';
use constant URLHEAD => 'https://himor.in/computers/?';

my $o_spl = new SatoLabel;
my $conf = $ARGV[0] || "config.json";

open(INDAT, $conf);
my $dtxt;
foreach(<INDAT>) { $dtxt .= $_; }
close(INDAT);
my $params = decode_json($dtxt);

open (INDAT, ITEMS);
$dtxt = '';
foreach(<INDAT>) { $dtxt .= $_; }
close(INDAT);
my $items = decode_json($dtxt);

my $ofile;
my $cstr;
my $cprm;
my $clid;
for my $key (keys(%$params)) {
  $ofile = $key . '.dat';
  $cprm = $params->{$key};

  $o_spl->init_page(256, 392, "shiftjis");
  $o_spl->print_xfont(25, 225, 1, 1, 22, $key);
  $o_spl->print_ascii(70, 240, 1, 1, "M", $cprm->{'cpu'});
  $cstr = "Mem " . $cprm->{'mem'} . "GB / SSD " . $cprm->{'ssd'} . "GB";
  $o_spl->print_ascii(95, 240, 1, 1, "M", $cstr);
  if (defined($items->{$cprm->{'type'}})) {
    $cstr = $items->{$cprm->{'type'}};
  } else {
    $cstr = $cprm->{'type'};
  }
  $cstr .= ' ' . $cprm->{'id'};
  $o_spl->print_ascii(120, 240, 1, 1, "M", $cstr);
  $o_spl->print_ascii(145, 240, 1, 1, "M", $cprm->{'os'} . " / " . $cprm->{'setup'});
  $o_spl->print_ascii(170, 240, 1, 1, "M", $cprm->{'account'});
  $cstr = '';
  $clid = 0;
  foreach my $ci (@{$cprm->{'software'}}) {
    if (len($cstr) + len($ci) > 18) {
      $o_spl->print_ascii(200 + $clid * 25, 240, 1, 1, "M", $cstr);
      $cstr = '';
      $clid++;
    } else {
      $cstr .= ', ' . $ci;
    }
    if ($clid > 1) { last; }
  }
  if ($clid < 2) {
    $o_spl->print_ascii(200 + $clid * 25, 240, 1, 1, "M", $cstr);
  }
  $o_spl->print_qr(150, 505, "Q", 3, URLHEAD . $key);
  $o_spl->finish_page(1);

  open(my $fh, ">" . $ofile);
  $o_spl->output($fh);
  close($fh);
}


exit;

