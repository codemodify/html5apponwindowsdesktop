/*******************************************************************
    DOM Wrapping
*******************************************************************/
var Dom =
{
    get: function(el)
    {
        if( typeof el === 'string' )
            return document.getElementById( el );

        else
            return el;
    },
  
    add: function( el, dest )
    {
        var el      = this.get( el );
        
        var dest    = this.get( dest );
            dest.appendChild(el);
    },

    remove: function(el)
    {
        var el = this.get(el);
            el.parentNode.removeChild(el);
    },
    
    create: function( tagName )
    {
        var domNode = document.createElement( tagName );
        
        return domNode;
    }
};

function domInsertAfter( referenceNode, newNode )
{
    referenceNode.parentNode.insertBefore( newNode, referenceNode.nextSibling );
}


function getChildById( parentDomNode, childId )
{
    var nodeList = parentDomNode.childNodes;
    var node = null;
    var nodeIndex = 0;
    
    // check for each node for the ID
    for( nodeIndex=0; nodeIndex < nodeList.length; nodeIndex++ )
    {
        node = nodeList[ nodeIndex ];
        
        if( node.nodeName == '#text' )
            continue;

        try
        {
            if( node.getAttribute('id') == childId )
                return node;
        }
        catch( exception )
        {}
    }
    
    // look for each item in its children
    for( nodeIndex=0; nodeIndex < nodeList.length; nodeIndex++ )
    {
        node = nodeList[ nodeIndex ];
        
        if( node.nodeName == '#text' )
            continue;

        var returnNode = getChildById( node, childId );
        if( returnNode )
            return returnNode;
    }
    
    return null;
}

function domRemoveChildren( domNode )
{
//    if ( domNode.hasChildNodes() )
//    {
        while( domNode.childNodes.length >= 1 )
        {
            domNode.removeChild( domNode.firstChild );       
        }
//    }
}



/*******************************************************************
    Events Wrapping
*******************************************************************/
var Event =
{
    add: function()
    {
        if( window.addEventListener )
        {
            return function(el, type, fn)
            {
                Dom.get(el).addEventListener(type, fn, false);
            };
        }
        
        else if( window.attachEvent )
        {
            return function(el, type, fn)
            {
                var f = function()
                {
                    fn.call(Dom.get(el), window.event);
                };

                Dom.get(el).attachEvent('on' + type, f);
            };
        }
    }()
};


/*******************************************************************
    Widget Helpers
*******************************************************************/
function datePicker( domEelementId, onDatePickedDelegate ) // picks a calendar date
{
    var featureList=["calendar"];
    
    var calendarCoordinates = OAT.Dom.position( domEelementId );

    var calendar = new OAT.Calendar();
        calendar.dayNames   = ["Lun","Mar","Mer","Jeu","Ven","Sam","Dim"];
        calendar.monthNames = ["Jan","FeV","Mar","Avr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
        //calendar.specialDays = [0,0,0,0,0,1,1];
        //calendar.dayZeroIndex = 6;
        //calendar.weekStartIndex = 6;           

        calendar.show( calendarCoordinates[0], calendarCoordinates[1]+30, onDatePickedDelegate );    
}

function fillComboBox( domEelement, values )
{
    var selectDomNode = domEelement; // Dom.get( domEelementId );
    
    // clear previous elements first
    while( selectDomNode.childNodes.length )
    {
        Dom.remove( selectDomNode.firstChild );
    }
    
    // add new items
    var realValues = deserializeToArrayObject( values );
    for( index = 0; index < realValues.length; index++ )
    {
        var value = realValues[ index ];
        
        var optionDomNode = Dom.create( 'option' );
            optionDomNode.setAttribute( 'value', index );
            optionDomNode.innerHTML = value;
            optionDomNode.value = value;

        selectDomNode.appendChild( optionDomNode );
    }
}

function fillComboBoxAndSetValue( domEelement, values, currentValue )
{
    fillComboBox( domEelement, values );

    for( var i=0; i < domEelement.length; i++ )
    {
        if( domEelement.options[i].value == currentValue )
            domEelement.options[i].selected = true;
    }
}

function getValueByCode( values, codes, current )
{
    valuesAsArray = deserializeToArrayObject( values );
    codesAsArray  = deserializeToArrayObject( codes  );

    var  index = 0;
    for( index = 0; index < codesAsArray.length; index++ )
    {
        if( codesAsArray[index] == current )
            break;
    }
    
    if( index > valuesAsArray.length )
        return '';
        
    return valuesAsArray[ index ];
}

function getCodeByValue( values, codes, current )
{
    valuesAsArray = deserializeToArrayObject( values );
    codesAsArray  = deserializeToArrayObject( codes  );
    
    var  index = 0;
    for( index = 0; index < valuesAsArray.length; index++ )
    {
        if( valuesAsArray[index] == current )
            break;
    }
    
    if( index > codesAsArray.length )
        return '';
        
    return codesAsArray[ index ];
}

function deserializeToArrayObject( serializedArray )
{
    return serializedArray.split( ';' );
}

function validateTelephone( inputId, length )
{
    checkForMinOnePhoneNumber();

    var inputObject = Dom.get( inputId );
    if( inputObject == null )
        return;
    
    var curentValue = inputObject.value;
    
    while( -1 != curentValue.indexOf(' ') )
        curentValue = curentValue.replace( ' ', '' );
    
    if( curentValue.length > length )
        curentValue = curentValue.substr( 0, length );

    if
    (
        curentValue.length > 0
        &&
        curentValue.length < length
    )
        markControlAsInvalidValue( inputObject );
    else
        unMarkControlAsInvalidValue( inputObject );
        
    if( isSystemKey(event.keyCode) )
        return;

    // insert sapces
    var newValue = '';
    for( i=0; i < curentValue.length; i++ )
    {
        newValue = newValue + curentValue.charAt( i );
        if
        (
            ( i % 2 )
            &&
            ( newValue.length < length+(length/2-1) )
         )
            newValue = newValue + ' ';
    }
    
    inputObject.value = newValue;
}

function validateDate( inputId )
{
    var crretPos = getCaretPos( inputId );

    var length = 8;

    var inputObject = Dom.get( inputId );
    var curentValue = inputObject.value;

    if( curentValue.length > length+2 )
        curentValue = curentValue.substr( 0, length+2 );
        
    if
    (
        curentValue.length > 0
        &&
        curentValue.length < length+2
    )
    {
        markControlAsInvalidValue( inputObject );
        Dom.get( 'dateWarning' ).style.visibility = 'visible';
    }
    else
    {
        unMarkControlAsInvalidValue( inputObject );
        Dom.get( 'dateWarning' ).style.visibility = 'hidden';
    }
        
    if( isSystemKey(event.keyCode) )
        return;        

    var curentValueAsArray = curentValue.split( '/' );

    while( -1 != curentValue.indexOf('/') )
        curentValue = curentValue.replace( '/', '' );

    // insert the slashes
    var newValue = '';
    
    if( curentValueAsArray.length == 1 || curentValueAsArray.length == 2 )
    {
        for( i=0; i < curentValue.length; i++ )
        {
            newValue = newValue + curentValue.charAt( i );

            if
            (
                ( i <=4 )
                &&
                ( i % 2 )
                &&
                ( newValue.length < length+(length/2-1) )
            )
            {
                newValue = newValue + '/';
                crretPos+=1;
            }
        }
        
        curentValueAsArray = newValue.split( '/' );
    }   

    if( null != curentValueAsArray[0] )
        newValue = curentValueAsArray[0];

    if( null != curentValueAsArray[1] )
        newValue = newValue + '/' + curentValueAsArray[1];
        
    if( null != curentValueAsArray[2] )
        newValue = newValue + '/' + curentValueAsArray[2];
        
    inputObject.value = newValue;
    
    setCaretPosition( inputId, crretPos );
}

function getCaretPos( elemId )   
{
    var txt1 = document.getElementById(elemId);
    
    txt1.focus();   

    var   currentRange=document.selection.createRange();   
    var   workRange=currentRange.duplicate();   

    txt1.select();   
    var   allRange=document.selection.createRange();   
    var   len=0;   

    while(workRange.compareEndPoints("StartToStart",allRange)>0)   
    {   
    workRange.moveStart("character",-1);   
    len++;   
    }   

    currentRange.select();   

    return len;
}

function setCaretPosition( elemId, caretPos )
{
    var elem = document.getElementById(elemId);

    if(elem != null) {
        if(elem.createTextRange) {
            var range = elem.createTextRange();
            range.move('character', caretPos);
            range.select();
        }
        else {
            if(elem.selectionStart) {
                elem.focus();
                elem.setSelectionRange(caretPos, caretPos);
            }
            else
                elem.focus();
        }
    }
}

function isSystemKey( keyCode )
{
    switch( keyCode )
    {
        case  8: // BackSpace
        case 37: // <-
        case 39: // ->
        case 38: // up
        case 40: // down
            return true;
            
        default:
            return false;
    }    
}

function checkForMinOnePhoneNumber()
{
    var ph1 = 'telephoneDomicile';
    var ph2 = 'telephonePortable';
    var ph3 = 'telephoneBureau';
    
    var ph1Object = Dom.get( ph1 );
    var ph2Object = Dom.get( ph2 );
    var ph3Object = Dom.get( ph3 );
    
    if( ph1Object == null || ph2Object == null || ph3Object == null )
        return;

    if( '' == ph1Object.value && '' == ph2Object.value && '' == ph3Object.value )
    {
        Dom.get( 'auMoinIlFautUnNr' ).style.visibility = 'visible';
    }
    else
    {
        Dom.get( 'auMoinIlFautUnNr' ).style.visibility = 'hidden';
    }
}

function customTrim( curentValue )
{
    while( -1 != curentValue.indexOf(' ') )
        curentValue = curentValue.replace( ' ', '' );
        
    return curentValue;
}

function markControlAsInvalidValue( domElement )
{
//    domElement.style.borderWidth        = 'Medium';

//    domElement.style.borderTopColor     = 'Red';
//    domElement.style.borderLeftColor    = 'Red';
//    domElement.style.borderRightColor   = 'Red';
//    domElement.style.borderBottomColor  = 'Red';

    domElement.style.backgroundColor = 'Red';
}

function unMarkControlAsInvalidValue( domElement )
{
//    domElement.style.borderWidth        = '';

//    domElement.style.borderTopColor     = '';
//    domElement.style.borderLeftColor    = '';
//    domElement.style.borderRightColor   = '';
//    domElement.style.borderBottomColor  = '';

    domElement.style.backgroundColor = '';
}


function checkToJumpToMonth()
{
    if( Dom.get( 'jjNaissance' ).value.length >= 2 )
    {
        Dom.get( 'jjNaissance' ).value = Dom.get( 'jjNaissance' ).value.substr( 0, 2 );
        Dom.get( 'mmNaissance' ).focus();
    }
}

function checkToJumpToYear()
{
    if( Dom.get( 'mmNaissance' ).value.length >= 2 )
    {
        Dom.get( 'mmNaissance' ).value = Dom.get( 'mmNaissance' ).value.substr( 0, 2 );
        Dom.get( 'aaNaissance' ).focus();
    }
}

function checkForLengthLimits()
{
    if( Dom.get( 'aaNaissance' ).value.length > 4 )
    {
        Dom.get( 'aaNaissance' ).value = 
            Dom.get( 'aaNaissance' ).value.substr( 0, 4 );    
    }
}

/*******************************************************************
    Printing
*******************************************************************/
function printContentByDomId( domId )
{
    var domObject = Dom.get( domId );
    
    if( null == domObject )
        return;

    printContentByDomObject( domObject );
}

function printContentByDomObject( domObject )
{
	var clonnedNode = domObject.cloneNode( true );

	var printWindowContent  = '<html><head></head><body>' + clonnedNode.innerHTML +'</body></html>';

	var printWindow = window.open( '_blank', 'printWindow' )
        printWindow.document.open()
        printWindow.document.write( printWindowContent )
        printWindow.document.close()
        printWindow.window.print();
        printWindow.window.close();
}



/*******************************************************************
    Logger
*******************************************************************/
function clearLog()
{
    Dom.get( 'statusMessage' ).innerHTML = '';
}

function logInfo( message )
{
    Dom.get( 'statusMessage' ).innerHTML = '<span style="color: #000888; font-weight: bold; font-style:italic;">' + message + '</span>';
    
    setInterval( clearLog, 10000 );
}

function logError( message )
{
    showErrorDialog( message );
}

function logWebServiceCallError( serviceCallError )
{
    var detailedError = 
        "<br/><br/>Type:    " +serviceCallError._exceptionType+
        "<br/><br/>Message: " +serviceCallError._message      +
        "<br/><br/>Stack:   " +serviceCallError._stackTrace;
        
    logError( detailedError );
}

function logAuthenticationError( errorString )
{
    var bodyContent =
        '<table width="100%" height="100%"><tr><td>' +
            '<center style="color: red;"><h3>Erreur d\'identification.</h3></center>';
        
        bodyContent += '<br/><br/>';
        
        bodyContent += '</td></tr></table>';
    
    Dom.get( 'theBodyTag' ).innerHTML = bodyContent;
    
    errorTriggered();    
}

function showErrorDialog( errorMessage )
{
    // override the error message
    errorMessage =  'Une erreur technique s\'est produite, <br /><br />'
                        +
                    'Redémarrez l\'application ou appeler le support technique.';

    g_currentDialog = g_hiddenObjectsList[ 'errorDialog' ];

    Dom.add( g_currentDialog, document );
    
    // attach
    OAT.Dom.attach( 'errorDialogOk', 'click', errorDialogOkClick );
    
    var errorContent = getChildById( g_currentDialog, 'errorContent' );
        errorContent.innerHTML = '<span style="color: red; font-weight: bold; font-style:italic;">' + errorMessage + '</span>';
    
    OAT.Dimmer.show( 'errorDialog' );
    OAT.Dom.center( 'errorDialog', 1, 1 );
    
    errorTriggered();
}

function errorDialogOkClick()
{
    // detach
    OAT.Dimmer.hide();
    OAT.Dom.detach( 'errorDialogOk', 'click', errorDialogOkClick );
    
    g_currentDialog = null;
    
    delayedWindowClose( 10 );
}



/*******************************************************************
    Delayed Window Close
*******************************************************************/
function delayedWindowClose( timeout )
{
    if( !timeout )
        timeout = 0;
    
    setInterval( delayedWindowCloseHelper, timeout );
}

function delayedWindowCloseHelper()
{
//    window.close();
    quitCampagne();
}
