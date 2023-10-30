export const C_questions = [

    {
        id :  1,
        ques : 'When a copy constructor may be called?',
        option : {
            'O1' : 'When an object of the class is returned by value.',
            'O2' : 'When an object of the class is passed (to a function) by value as an argument.',
            'O3' : 'When an object is constructed based on another object of the same class',
            'O4' : 'All of the above'
        },

        ans : 'All of the above'
    },
    {
        id :  2,
        ques : 'Which of the following is true',
        option : {
            'O1' : 'gets() can read a string with newline characters but a normal scanf() with %s can not.',
            'O2' : 'gets() can read a string with spaces but a normal scanf() with %s can not.',
            'O3' : 'gets() can always replace scanf() without any additional code.',
            'O4' : 'None of the above',
        },

        ans : 'gets() can read a string with spaces but a normal scanf() with %s can not.'
    },
    {
        id :  3,
        ques : 'Which of the following is true',
        option : {
            'O1' : 'gets() doesn\'t do any array bound testing and should not be used. ',
            'O2' : 'fgets() should be used in place of gets() only for files, otherwise gets() is fine',
            'O3' : 'gets() cannot read strings with spaces',
            'O4' : 'None of the above',
        },

        ans : 'gets() doesn\'t do any array bound testing and should not be used. '
    },
    {
        id :  4,
        ques : 'What does the following C statement mean? scanf("%4s", str);',
        option : {
            'O1' : 'Read exactly 4 characters from console.',
            'O2' : 'Read maximum 4 characters from console.',
            'O3' : 'Read a string str in multiples of 4',
            'O4' : 'Nothing',
        },

        ans : 'Read maximum 4 characters from console.'
    },
    {
        id :  5,
        ques : 'What is the return type of getchar()?',
        option : {
            'O1' : 'int',
            'O2' : 'char',
            'O3' : 'unsigned Char',
            'O4' : 'float',
        },

        ans : 'int'
    },
    {
        id :  6,
        ques : 'Normally user programs are prevented from handling I/O directly by I/O instructions in them. For CPUs having explicit I/O instructions, such I/O protection is ensured by having the I/O instructions privileged. In a CPU with memory mapped I/O, there is no explicit I/O instruction. Which one of the following is true for a CPU with memory mapped I/O?',
        option : {
            'O1' : 'I/O protection is ensured by operating system routine (s)',
            'O2' : 'I/O protection is ensured by a hardware trap',
            'O3' : 'I/O protection is ensured during system configuration',
            'O4' : '	I/O protection is not possible',
        },

        ans : 'I/O protection is ensured by operating system routine (s)'
    },
    {
        id :  7,
        ques : 'Which of the following functions from “stdio.h” can be used in place of printf()?',
        option : {
            'O1' : 'fputs() with FILE stream as stdout',
            'O2' : 'fprintf() with FILE stream as stdout.',
            'O3' : 'fwrite() with FILE stream as stdout.',
            'O4' : 'All of the above',
        },

        ans : 'fprintf() with FILE stream as stdout.'
    },
    {
        id :  8,
        ques : '\'C\' Language can be used in ??',
        option : {
            'O1' : 'Both System Software and Embedded Systems',
            'O2' : 'Only System Software',
            'O3' : 'Only Embedded Systems',
            'O4' : 'None',
        },

        ans : 'Both System Software and Embedded Systems'
    },
    {
        id :  9,
        ques : 'Which of the following is not a valid C variable name?',
        option : {
            'O1' : ' int number;',
            'O2' : 'float rate;',
            'O3' : ' int variable_count;',
            'O4' : 'int $main;',
        },

        ans : 'int $main;'
    },
    {
        id :  10,
        ques : 'Which keyword is used to prevent any changes in the variable within a C program?',
        option : {
            'O1' : 'immutable',
            'O2' : 'mutable',
            'O3' : 'const',
            'O4' : 'volatile',
        },

        ans : 'const'
    }
]

    


export const Cpp_questions = [

    {
        id :  1,
        ques : 'Which of the following is the correct syntax of including a user defined header files in C++?',
        option : {
            'O1' : '#include [userdefined]',
            'O2' : '#include “userdefined”',
            'O3' : '#include <userdefined.h>',
            'O4' : '#include <userdefined>'
        },

        ans : '#include “userdefined”'
    },
    {
        id :  2,
        ques : 'Which of the following user-defined header file extension used in c++?',
        option : {
            'O1' : 'hg',
            'O2' : 'cpp',
            'O3' : 'h',
            'O4' : 'hf',
        },

        ans : 'h'
    },
    {
        id :  3,
        ques : 'Which of the following is a correct identifier in C++?',
        option : {
            'O1' : 'VAR_1234',
            'O2' : '$var_name',
            'O3' : '7VARNAME',
            'O4' : '7var_name',
        },

        ans : 'VAR_1234'
    },
    {
        id :  4,
        ques : 'Which of the following is not a type of Constructor in C++?',
        option : {
            'O1' : 'Default constructor',
            'O2' : 'Parameterized constructor',
            'O3' : 'Copy constructor',
            'O4' : 'Friend constructor',
        },

        ans : 'Friend constructor'
    },
    {
        id :  5,
        ques : 'Which of the following approach is used by C++?',
        option : {
            'O1' : 'Left-right',
            'O2' : 'Right-left',
            'O3' : 'Bottom-up',
            'O4' : 'Top-down',
        },

        ans : 'Bottom-up'
    },
    {
        id :  6,
        ques : 'What is virtual inheritance in C++?',
        option : {
            'O1' : 'C++ technique to enhance multiple inheritance',
            'O2' : 'C++ technique to ensure that a private member of the base class can be accessed somehow',
            'O3' : 'C++ technique to avoid multiple inheritances of classes',
            'O4' : 'C++ technique to avoid multiple copies of the base class into children/derived class',
        },

        ans : 'C++ technique to avoid multiple copies of the base class into children/derived class'
    },
    {
        id :  7,
        ques : 'What is the difference between delete and delete[] in C++?',
        option : {
            'O1' : 'delete is syntactically correct but delete[] is wrong and hence will give an error if used in any case',
            'O2' : 'delete is used to delete normal objects whereas delete[] is used to pointer objects',
            'O3' : 'delete is a keyword whereas delete[] is an identifier',
            'O4' : 'delete is used to delete single object whereas delete[] is used to multiple(array/pointer of) objects',
        },

        ans : 'delete is used to delete single object whereas delete[] is used to multiple(array/pointer of) objects'
    },
    {
        id :  8,
        ques : 'Which of the following is correct about this pointer in C++?',
        option : {
            'O1' : ' this pointer is passed as a hidden argument in all static variables of a class',
            'O2' : 'this pointer is passed as a hidden argument in all the functions of a class',
            'O3' : 'this pointer is passed as a hidden argument in all non-static functions of a class',
            'O4' : 'this pointer is passed as a hidden argument in all static functions of a class',
        },

        ans : 'this pointer is passed as a hidden argument in all non-static functions of a class'
    },
    {
        id :  9,
        ques : 'Which of the following type is provided by C++ but not C?',
        option : {
            'O1' : 'double',
            'O2' : 'float',
            'O3' : ' int',
            'O4' : 'bool',
        },

        ans : 'bool'
    },
    {
        id :  10,
        ques : 'By default, all the files in C++ are opened in _________ mode.',
        option : {
            'O1' : 'Binary',
            'O2' : 'VTC',
            'O3' : 'Text',
            'O4' : 'ISCII',
        },

        ans : 'Text'
    }
]

    

export const Dbms_questions = [

    {
        id :  1,
        ques : 'What is the full form of DBMS?',
        option : {
            'O1' : 'Data of Binary Management System',
            'O2' : 'Database Management System',
            'O3' : 'Database Management Service',
            'O4' : 'Data Backup Management System'
        },

        ans : 'Database Management System'
    },
    {
        id :  2,
        ques : 'Which type of data can be stored in the database?',
        option : {
            'O1' : 'Image oriented data',
            'O2' : 'Text, files containing data',
            'O3' : 'Data in the form of audio or video',
            'O4' : 'All of the above',
        },

        ans : 'All of the above'
    },
    {
        id :  3,
        ques : ' In which of the following formats data is stored in the database management system',
        option : {
            'O1' : 'Image',
            'O2' : 'Text',
            'O3' : 'Table',
            'O4' : 'Graph',
        },

        ans : 'Table'
    },
    {
        id :  4,
        ques : 'Which of the following is not an example of DBMS?',
        option : {
            'O1' : 'MySQL',
            'O2' : 'Microsoft Acess',
            'O3' : 'IBM DB2',
            'O4' : 'Google',
        },

            ans : 'Google'
    },
    {
        id :  5,
        ques : 'Which of the following is known as a set of entities of the same type that share same properties, or attributes?',
        option : {
            'O1' : 'Relation set',
            'O2' : 'Tuples',
            'O3' : 'Entity set',
            'O4' : 'Entity Relation model',
        },

        ans : 'Entity set'
    },
    {
        id :  6,
        ques : 'What does an RDBMS consist of?',
        option : {
            'O1' : 'Collection of Records',
            'O2' : 'Collection of Keys',
            'O3' : 'Collection of Tables',
            'O4' : 'Collection of Fields',
        },

        ans : 'Collection of Tables'
    },
    {
        id :  7,
        ques : 'The values appearing in given attributes of any tuple in the referencing relation must likewise occur in specified attributes of at least one tuple in the referenced relation, according to _____________________',
        option : {
            'O1' : 'Referential',
            'O2' : 'Primary',
            'O3' : 'Referencing',
            'O4' : 'Specific',
        },

        ans : 'Referential'
    },
    {
        id :  8,
        ques : 'The ability to query data, as well as insert, delete, and alter tuples, is offered by ____________',
        option : {
            'O1' : 'TCL (Transaction Control Language)',
            'O2' : 'DCL (Data Control Language)',
            'O3' : 'DDL (Data Definition Langauge)',
            'O4' : 'DML (Data Manipulation Langauge)',
        },

        ans : 'DML (Data Manipulation Langauge)'
    },
    {
        id :  9,
        ques : '______________ is a set of one or more attributes taken collectively to uniquely identify a record.',
        option : {
            'O1' : 'Primary Key',
            'O2' : 'Foreign key',
            'O3' : 'Super Key',
            'O4' : 'Candidate Key',
        },

        ans : 'Super Key'
    },
    {
        id :  10,
        ques : 'Which command is used to remove a relation from an SQL?',
        option : {
            'O1' : 'Drop Table',
            'O2' : 'Delete',
            'O3' : 'Purge',
            'O4' : 'Remove',
        },

        ans : 'Drop Table'
    }
]

    
export const Java_questions = [

    {
        id :  1,
        ques : 'Number of primitive data types in Java are?',
        option : {
            'O1' : '6',
            'O2' : '7',
            'O3' : '8',
            'O4' : '9'
        },

        ans : '8'
    },
    {
        id :  2,
        ques : 'Which statement is true about Java?',
        option : {
            'O1' : 'Java is a sequence-dependent programming language',
            'O2' : 'Java is a code dependent programming language',
            'O3' : 'Java is a platform-dependent programming language',
            'O4' : 'Java is a platform-independent programming language',
        },

        ans : 'Java is a platform-independent programming language'
    },
    {
        id :  3,
        ques : 'Which component is used to compile, debug and execute the java programs?',
        option : {
            'O1' : 'JRE',
            'O2' : 'JIT',
            'O3' : 'JDK',
            'O4' : 'JVM',
        },

        ans : 'JDK'
    },
    {
        id :  4,
        ques : 'Which of these cannot be used for a variable name in Java?',
        option : {
            'O1' : 'identifier & keyword',
            'O2' : 'identifier',
            'O3' : 'keyword',
            'O4' : 'none of the mentioned',
        },

            ans : 'keyword'
    },
    {
        id :  5,
        ques : 'Which environment variable is used to set the java path?',
        option : {
            'O1' : 'MAVEN_Path',
            'O2' : 'JavaPATH',
            'O3' : 'JAVA',
            'O4' : 'JAVA_HOME',
        },

        ans : 'JAVA_HOME'
    },
    {
        id :  6,
        ques : 'Which of the following is not an OOPS concept in Java?',
        option : {
            'O1' : 'Polymorphism',
            'O2' : 'Inheritance',
            'O3' : 'Compilation',
            'O4' : 'Encapsulation',
        },

        ans : 'Compilation'
    },
    {
        id :  7,
        ques : 'What is not the use of “this” keyword in Java?',
        option : {
            'O1' : 'Referring to the instance variable when a local variable has the same name',
            'O2' : 'Passing itself to the method of the same class',
            'O3' : 'Passing itself to another method',
            'O4' : 'Calling another constructor in constructor chaining',
        },

        ans : 'Passing itself to the method of the same class'
    },
    {
        id :  8,
        ques : 'Which of the following is a type of polymorphism in Java Programming?',
        option : {
            'O1' : 'Multiple polymorphism',
            'O2' : 'Compile time polymorphism',
            'O3' : 'Multilevel polymorphism',
            'O4' : 'Execution time polymorphism',
        },

        ans : 'Compile time polymorphism'
    },
    {
        id :  9,
        ques : 'What is Truncation in Java?',
        option : {
            'O1' : 'Floating-point value assigned to a Floating type',
            'O2' : 'Floating-point value assigned to an integer type',
            'O3' : 'Integer value assigned to floating type',
            'O4' : 'Integer value assigned to floating type',
        },

        ans : 'Floating-point value assigned to an integer type'
    },
    {
        id :  10,
        ques : 'Which of the following is a superclass of every class in Java?',
        option : {
            'O1' : 'ArrayList',
            'O2' : 'Abstract class',
            'O3' : 'Object class',
            'O4' : 'String',
        },

        ans : 'Object class'
    }
]

    
export const Js_questions = [

    {
        id :  1,
        ques : 'What is JavaScript?',
        option : {
            'O1' : 'JavaScript is a scripting language used to make the website interactive',
            'O2' : 'JavaScript is an assembly language used to make the website interactive',
            'O3' : 'JavaScript is a compiled language used to make the website interactive',
            'O4' : 'None of the mentioned'
        },

        ans : 'JavaScript is a scripting language used to make the website interactive'
    },
    {
        id :  2,
        ques : 'Which of the following is correct about JavaScript?',
        option : {
            'O1' : 'JavaScript is an Object-Based language',
            'O2' : 'JavaScript is Assembly-language',
            'O3' : 'JavaScript is an Object-Oriented language',
            'O4' : 'JavaScript is a High-level language',
        },

        ans : 'JavaScript is an Object-Based language'
    },
    {
        id :  3,
        ques : 'Among the given statements, which statement defines closures in JavaScript?',
        option : {
            'O1' : 'JavaScript is a function that is enclosed with references to its inner function scope',
            'O2' : 'JavaScript is a function that is enclosed with references to its lexical environment',
            'O3' : 'JavaScript is a function that is enclosed with the object to its inner function scope',
            'O4' : 'None of the mentioned',
        },

        ans : 'JavaScript is a function that is enclosed with references to its lexical environment'
    },
    {
        id :  4,
        ques : 'Arrays in JavaScript are defined by which of the following statements?',
        option : {
            'O1' : 'It is an ordered list of values',
            'O2' : 'It is an ordered list of objects',
            'O3' : 'It is an ordered list of string',
            'O4' : 'It is an ordered list of functions',
        },

            ans : 'It is an ordered list of values'
    },
    {
        id :  5,
        ques : 'Which of the following is not javascript data types?',
        option : {
            'O1' : 'Null type',
            'O2' : 'Undefined type',
            'O3' : 'Number type',
            'O4' : 'All of the mentioned',
        },

        ans : 'All of the mentioned'
    },
    {
        id :  6,
        ques : 'Where is Client-side JavaScript code is embedded within HTML documents?',
        option : {
            'O1' : 'A URL that uses the special javascript:code',
            'O2' : 'A URL that uses the special javascript:protocol',
            'O3' : 'A URL that uses the special javascript:encoding',
            'O4' : 'A URL that uses the special javascript:stack',
        },

        ans : ''
    },
    {
        id :  7,
        ques : 'Which of the following object is the main entry point to all client-side JavaScript features and APIs?',
        option : {
            'O1' : 'Position',
            'O2' : 'Window',
            'O3' : 'Standard',
            'O4' : 'Location',
        },

        ans : 'Window'
    },
    {
        id :  8,
        ques : 'Which of the following can be used to call a JavaScript Code Snippet?',
        option : {
            'O1' : 'Function/Method',
            'O2' : 'Preprocessor',
            'O3' : 'Triggering Event',
            'O4' : 'RMI',
        },

        ans : 'Function/Method'
    },
    {
        id :  9,
        ques : 'Which of the following explains correctly what happens when a JavaScript program is developed on a Unix Machine?',
        option : {
            'O1' : 'will work perfectly well on a Windows Machine',
            'O2' : 'will be displayed as JavaScript text on the browser',
            'O3' : 'will throw errors and exceptions',
            'O4' : 'must be restricted to a Unix Machine only',
        },

        ans : 'will be displayed as JavaScript text on the browser'
    },
    {
        id :  10,
        ques : 'Which of the following scoping type does JavaScript use?',
        option : {
            'O1' : 'Sequential',
            'O2' : 'Segmental',
            'O3' : 'Lexical',
            'O4' : 'Literal',
        },

        ans : 'Lexical'
    }
]

    

export const Python_questions = [

    {
        id :  1,
        ques : 'Which of the following is true for variable names in Python?',
        option : {
            'O1' : 'underscore and ampersand are the only two special characters allowed',
            'O2' : 'unlimited length',
            'O3' : 'all private members must have leading and trailing underscores',
            'O4' : 'none of the mentioned'
        },

        ans : 'unlimited length'
    },
    {
        id :  2,
        ques : 'What does pip stand for python?',
        option : {
            'O1' : 'Pip Installs Python',
            'O2' : 'Pip Installs Packages',
            'O3' : 'Preferred Installer Program',
            'O4' : 'All of the mentioned',
        },

        ans : 'Preferred Installer Program'
    },
    {
        id :  3,
        ques : ' What is the order of precedence in python?',
        option : {
            'O1' : 'Exponential, Parentheses, Multiplication, Division, Addition, Subtraction',
            'O2' : 'Exponential, Parentheses, Division, Multiplication, Addition, Subtraction',
            'O3' : ' Parentheses, Exponential, Multiplication, Division, Subtraction, Addition',
            'O4' : 'Parentheses, Exponential, Multiplication, Division, Addition, Subtraction',
        },

        ans : 'Parentheses, Exponential, Multiplication, Division, Addition, Subtraction'
    },
    {
        id :  4,
        ques : 'Python supports the creation of anonymous functions at runtime, using a construct called __________',
        option : {
            'O1' : 'pi',
            'O2' : 'anonymous',
            'O3' : 'lambda',
            'O4' : 'none if the mentioned',
        },

            ans : 'lambda'
    },
    {
        id :  5,
        ques : 'Which of the following functions can help us to find the version of python that we are currently working on?',
        option : {
            'O1' : 'sys.version(1)',
            'O2' : 'sys.version(0)',
            'O3' : 'sys.version()',
            'O4' : 'sys.version',
        },

        ans : 'sys.version'
    },
    {
        id :  6,
        ques : 'Which of the following character is used to give single-line comments in Python?',
        option : {
            'O1' : '//',
            'O2' : '#',
            'O3' : '!',
            'O4' : '/*',
        },

        ans : '#'
    },
    {
        id :  7,
        ques : 'Which keyword is used for function in Python language?',
        option : {
            'O1' : 'Function',
            'O2' : 'def',
            'O3' : 'Fun',
            'O4' : 'Define',
        },

        ans : 'def'
    },
    {
        id :  8,
        ques : 'Which of the following is used to define a block of code in Python language?',
        option : {
            'O1' : 'Indentation',
            'O2' : 'Key',
            'O3' : 'Brackets',
            'O4' : 'All of the mentioned',
        },

        ans : 'Indentation'
    },
    {
        id :  9,
        ques : 'Is Python case sensitive when dealing with identifiers?',
        option : {
            'O1' : 'no',
            'O2' : 'yes',
            'O3' : 'machine dependent',
            'O4' : 'none of the mentioned',
        },

        ans : 'yes'
    },
    {
        id :  10,
        ques : 'Which type of Programming does Python support?',
        option : {
            'O1' : 'object-oriented programming',
            'O2' : 'structured programming',
            'O3' : 'functional programming',
            'O4' : 'all of the mentioned',
        },

        ans : 'all of the mentioned'
    }
]

    