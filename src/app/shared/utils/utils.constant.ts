export const ANALISADOR_SINTATICO_TABELA = {
  PROGRAM: {
    "{": "STATEMENT",
    ";": "STATEMENT",
    "def": "FUNCLIST",
    "int": "STATEMENT",
    "float": "STATEMENT",
    "string": "STATEMENT",
    "if": "STATEMENT",
    "for": "STATEMENT",
    "print": "STATEMENT",
    "read": "STATEMENT",
    "break": "STATEMENT",
    "return": "STATEMENT",
    "ident": "STATEMENT",
    "$": "",
  },
  FUNCLIST: {
    "def": "FUNCDEF FUNCLIST",
    "$": "",
  },
  FUNCDEF: {
    "def": "def ident ( PARAMLIST ) { STATELIST }"
  },
  PARAMLIST: {
    ")": "",
    "int": "TYPE ident R13",
    "float": "TYPE ident R13",
    "string": "TYPE ident R13"
  },
  TYPE: {
    "int": "int",
    "string": "string",
    "float": "float"
  },
  STATEMENT: {
    "{": "{ STATELIST }",
    ";": ";",
    "int": "VARDECL ;",
    "float": "VARDECL ;",
    "string": "VARDECL ;",
    "if": "IFSTAT ",
    "for": "FORSTAT ",
    "print": "PRINTSTAT ;",
    "read": "READSTAT ;",
    "break": "break ;",
    "return": "return ;",
    "ident": "ATRIBSTAT ;",
  },
  VARDECL: {
    "int": "int ident R1",
    "float": "float ident R1",
    "string": "string ident R1",
  },
  ATRIBSTAT: {
    "ident": "LVALUE ATRIBUICAO R10"
  },
  PARAMLISTCALL: {
    ")": "",
    "ident": "ident R11",
  },
  PRINTSTAT: {
    "print": "print EXPRESSION",
  },
  READSTAT: {
    "read": "read LVALUE"
  },
  IFSTAT: {
    "if": "if ( EXPRESSION ) STATEMENT R2"
  },
  FORSTAT: {
    "for": "for ( ATRIBSTAT ; EXPRESSION ; ATRIBSTAT ) STATEMENT"
  },
  STATELIST: {
    "{": "STATEMENT R3",
    "}": "",
    ";": "STATEMENT R3",
    "int": "STATEMENT R3",
    "float": "STATEMENT R3",
    "string": "STATEMENT R3",
    "if": "STATEMENT R3",
    "for": "STATEMENT R3",
    "print": "STATEMENT R3",
    "read": "STATEMENT R3",
    "break": "STATEMENT R3",
    "return": "STATEMENT R3",
    "ident": "STATEMENT R3"
  },
  ALLOCEXPRESSION: {
    "new": "new TYPE [ NUMEXPRESSION ] R4",
  },
  EXPRESSION: {
    "(": "NUMEXPRESSION R5",
    "+": "NUMEXPRESSION R5",
    "-": "NUMEXPRESSION R5",
    "null": "NUMEXPRESSION R5",
    "string_constant": "NUMEXPRESSION R5",
    "float_constant": "NUMEXPRESSION R5",
    "int_constant": "NUMEXPRESSION R5",
    "ident": "NUMEXPRESSION R5",
  },
  NUMEXPRESSION: {
    "(": "TERM R6",
    "+": "TERM R6",
    "-": "TERM R6",
    "null": "TERM R6",
    "string_constant": "TERM R6",
    "float_constant": "TERM R6",
    "int_constant": "TERM R6",
    "ident": "TERM R6",
  },
  TERM: {
    "(": "UNARYEXPR R7",
    "+": "UNARYEXPR R7",
    "-": "UNARYEXPR R7",
    "null": "UNARYEXPR R7",
    "string_constant": "UNARYEXPR R7",
    "float_constant": "UNARYEXPR R7",
    "int_constant": "UNARYEXPR R7",
    "ident": "UNARYEXPR R7",
  },
  UNARYEXPR: {
    "(": "R8 FACTOR",
    "+": "R8 FACTOR",
    "-": "R8 FACTOR",
    "null": "R8 FACTOR",
    "string_constant": "R8 FACTOR",
    "float_constant": "R8 FACTOR",
    "int_constant": "R8 FACTOR",
    "ident": "R8 FACTOR",
  },
  FACTOR: {
    "(": "( NUMEXPRESSION )",
    "null": "null",
    "string_constant": "string_constant",
    "float_constant": "float_constant",
    "int_constant": "int_constant",
    "ident": "LVALUE",
  },
  LVALUE: {
    "ident": "ident R9",
  },
  R1: { "[": "[ int_constant ] R1", ";": "", "ATRIBUICAO": "" },
  R2: {
    "(": "",
    ")": "",
    "{": "",
    ";": "",
    "int": "",
    "float": "",
    "string": "",
    "if": "",
    "else": "else STATEMENT",
    "for": "",
    "print": "",
    "read": "",
    "break": "",
    "return": "",
    "ident": "",
    "$": ""
  },
  R3: {
    "(": "",
    ")": "",
    "{": "STATELIST",
    "}": "",
    ";": "STATELIST",
    "int": "STATELIST",
    "float": "STATELIST",
    "string": "STATELIST",
    "if": "STATELIST",
    "for": "STATELIST",
    "print": "STATELIST",
    "read": "STATELIST",
    "break": "STATELIST",
    "return": "STATELIST",
    "ident": "STATELIST",
    "$": "",
  },
  R4: {
    "[": "[ NUMEXPRESSION ] R4",
    ")": "",
    ";": ""
  },
  R5: {
    ")": "",
    ";": "",
    "MAIOROUIGUAL": "OPERATOR NUMEXPRESSION",
    "MENOROUIGUAL": "OPERATOR NUMEXPRESSION",
    "MENOR": "OPERATOR NUMEXPRESSION",
    "MAIOR": "OPERATOR NUMEXPRESSION",
    "IGUAL": "OPERATOR NUMEXPRESSION",
    "DIFERENTE": "OPERATOR NUMEXPRESSION",
  },
  R6: {
    "]": "",
    ")": "",
    "MAIOROUIGUAL": "",
    "MENOROUIGUAL": "",
    "MENOR": "",
    "MAIOR": "",
    "IGUAL": "",
    "DIFERENTE": "",
    "+": "SYMBOL1 TERM R6",
    "-": "SYMBOL1 TERM R6",
    ";": ""
  },
  R7: {
    "]": "",
    ")": "",
    "+": "",
    "-": "",
    "*": "SYMBOL2 UNARYEXPR R7",
    "/": "SYMBOL2 UNARYEXPR R7",
    "%": "SYMBOL2 UNARYEXPR R7",
    "MAIOROUIGUAL": "",
    "MENOROUIGUAL": "",
    "MENOR": "",
    "MAIOR": "",
    "IGUAL": "",
    "DIFERENTE": "",
    ";": ""
  },
  R8: {
    "(": "",
    "+": "SYMBOL1",
    "-": "SYMBOL1",
    "string_constant": "",
    "float_constant": "",
    "int_constant": "",
    "ident": "",
    "null": ""
  },
  R9: {
    "[": "[ NUMEXPRESSION ] R12",
    "]": "",
    "(": "( PARAMLISTCALL )",
    ")": "",
    ";": "",
    "MAIOROUIGUAL": "",
    "MENOROUIGUAL": "",
    "MENOR": "",
    "MAIOR": "",
    "IGUAL": "",
    "DIFERENTE": "",
    "ATRIBUICAO": "",
    "+": "",
    "-": "",
    "*": "",
    "/": "",
    "%": ""
  },
  R10: {
    "(": "EXPRESSION",
    "+": "EXPRESSION",
    "-": "EXPRESSION",
    "null": "EXPRESSION",
    "new": "ALLOCEXPRESSION",
    "string_constant": "EXPRESSION",
    "float_constant": "EXPRESSION",
    "int_constant": "EXPRESSION",
    "ident": "EXPRESSION",
  },
  R11: {
    ")": "",
    ",": ", PARAMLISTCALL",
  },
  R12: {
    "[": "[ NUMEXPRESSION ] R12",
    ")": "",
    ";": "",
    "MAIOROUIGUAL": "",
    "MENOROUIGUAL": "",
    "MENOR": "",
    "MAIOR": "",
    "IGUAL": "",
    "DIFERENTE": "",
    "ATRIBUICAO": "",
    "+": "",
    "-": "",
    "*": "",
    "/": "",
    "%": "",
  },
  R13: {
    ")": "",
    ",": ", PARAMLIST",
  },
  SYMBOL1: {
    "+": "+",
    "-": "-"
  },
  SYMBOL2: {
    "*": "*",
    "/": "/",
    "%": "%"
  },
  OPERATOR: {
    "MAIOROUIGUAL": "MAIOROUIGUAL",
    "MENOROUIGUAL": "MENOROUIGUAL",
    "MENOR": "MENOR",
    "MAIOR": "MAIOR",
    "IGUAL": "IGUAL",
    "DIFERENTE": "DIFERENTE",
  },
}

export const ANALISADOR_LEXICO_TOKENS = [
  {
    "name": "string_constant",
    "regex": /"[^"]*"/g
  },
  {
    "name": "[",
    "regex": /\[/g
  },
  {
    "name": "]",
    "regex": /]/g
  },
  {
    "name": "(",
    "regex": /\(/g
  },
  {
    "name": ")",
    "regex": /\)/g
  },
  {
    "name": "{",
    "regex": /{/g
  },
  {
    "name": "}",
    "regex": /}/g
  },
  {
    "name": ",",
    "regex": /,/g
  },
  {
    "name": ";",
    "regex": /;/g
  },

  {
    "name": "MAIOROUIGUAL",
    "regex": />=/g
  },
  {
    "name": "MENOROUIGUAL",
    "regex": /<=/g
  },
  {
    "name": "IGUAL",
    "regex": /==/g
  },
  {
    "name": "DIFERENTE",
    "regex": /!=/g
  },
  {
    "name": "ATRIBUICAO",
    "regex": /=/g
  },
  {
    "name": "MENOR",
    "regex": /</g
  },
  {
    "name": "MAIOR",
    "regex": />/g
  },
  {
    "name": "+",
    "regex": /\+/g
  },
  {
    "name": "-",
    "regex": /-/g
  },
  {
    "name": "*",
    "regex": /\*/g
  },
  {
    "name": "/",
    "regex": /\//g
  },
  {
    "name": "%",
    "regex": /%/g
  },
  {
    "name": "def",
    "regex": /\bdef\b/g
  },
  {
    "name": "int",
    "regex": /\bint\b/g
  },
  {
    "name": "float",
    "regex": /\bfloat\b/g
  },
  {
    "name": "string",
    "regex": /\bstring\b/g
  },
  {
    "name": "if",
    "regex": /\bif\b/g
  },
  {
    "name": "else",
    "regex": /\belse\b/g
  },
  {
    "name": "for",
    "regex": /\bfor\b/g
  },
  {
    "name": "print",
    "regex": /\bprint\b/g
  },
  {
    "name": "read",
    "regex": /\bread\b/g
  },
  {
    "name": "break",
    "regex": /\bbreak\b/g
  },
  {
    "name": "return",
    "regex": /\breturn\b/g
  },
  {
    "name": "null",
    "regex": /\bnull\b/g
  },
  {
    "name": "new",
    "regex": /\bnew\b/g
  },
  {
    "name": "float_constant",
    "regex": /\b[0-9]*\.[0-9]+\b/g
  },
  {
    "name": "int_constant",
    "regex": /\b[0-9]+\b/g
  },
  {
    "name": "ident",
    "regex": /^\b[A-Za-z]+\b$/g
  }
];
