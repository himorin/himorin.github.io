#! /usr/bin/perl
# provides API for Sato Label printer
# use one object per one set of label(s)

#package PNAPI::SatoLabel;
package SatoLabel;
use Encode qw(encode);

use constant SLP_STX => "\x02";
use constant SLP_ETX => "\x03";
use constant SLP_ESC => "\x1b";

our $op;
our $code;

sub new {
  my ($self) = @_;
  # init
  $op = SLP_STX;
  $code = undef;
  return $self;
}

sub init_page {
  my ($self, $v, $h, $enc) = @_;
  $self->_start_page();
  $self->_set_label_size($v, $h);
  if (defined($enc)) {
    if (lc($enc) eq 'shiftjis') { $self->_use_ShiftJIS(); $code = 'Shift_JIS'; }
  }
}
sub finish_page {
  my ($self, $num) = @_;
  $self->_set_print_count($num);
}

sub print_ascii {
  my ($self, $v, $h, $ph, $pv, $font, $str) = @_;
  $self->_print_pos($v, $h);
  $op .= SLP_ESC . "P00";
  $op .= SLP_ESC . "L" . sprintf("%02d%02d", $ph, $pv);
  $op .= SLP_ESC . $font;
  $op .= ',' . $str;
}
sub print_mbtext {
  my ($self, $v, $h, $ph, $pv, $font, $str) = @_;
  $self->_print_pos($v, $h);
  $op .= SLP_ESC . "P00";
  $op .= SLP_ESC . "L" . sprintf("%02d%02d", $ph, $pv);
  $op .= SLP_ESC . $font;
  $op .= encode($code, $str);
}

sub print_qr {
  my ($self, $v, $h, $err, $cell, $str) = @_;
  $self->_print_pos($v, $h);
  $op .= SLP_ESC . sprintf("2D30,%s,%02d,0,0", $err, $cell);
  $op .= SLP_ESC . "DN" . sprintf("%05d", length($str)) . ',' . $str;
}

sub output {
  my ($self, $fh) = @_;
  binmode($fh, ':raw');
  print $fh $op;
  print $fh SLP_ETX;
  # init and reset (JIC)
  $op = SLP_STX;
}


#------------- internal routines

sub _start_page {
  my ($self) = @_;
  $op .= SLP_ESC . "A";
}
sub _end_page {
  my ($self) = @_;
  $op .= SLP_ESC . "Z";
}
sub _set_label_size {
  my ($self, $v, $h) = @_;
  $op .= SLP_ESC . "A1";
  $op .= "V" . sprintf("%05d", $v);
  $op .= "H" . sprintf("%04d", $h);
}
sub _set_print_count {
  my ($self, $num) = @_;
  $op .= SLP_ESC . "Q" . sprintf("%d", $num);
  $op .= SLP_ESC . "Z";
}

sub _use_ShiftJIS {
  my ($self) = @_;
  $op .= SLP_ESC . "KC1";
}

sub _print_pos {
  my ($self, $v, $h) = @_;
  $op .= SLP_ESC . "V" . sprintf("%04d", $v);
  $op .= SLP_ESC . "H" . sprintf("%04d", $h);
}


1;

__END__
