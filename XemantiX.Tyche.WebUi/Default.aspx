<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.master" AutoEventWireup="true"
    CodeBehind="Default.aspx.cs" Inherits="XemantiX.Tyche.WebUi._Default" %>

<asp:Content ID="HeaderContent" runat="server" ContentPlaceHolderID="HeadContent">
    <script src="Scripts/jquery.jsPlumb-1.3.3-all.js" type="text/javascript"></script>
    <script src="Scripts/ListView.js" type="text/javascript"></script>
</asp:Content>
<asp:Content ID="BodyContent" runat="server" ContentPlaceHolderID="MainContent">
    <div id="form">
		<div id="formInner">
			<span></span><input type="text" id="txtInput" size="35"></input><button onclick="javascript:TweetPlumb.search();">search</button>				 
		</div>
	</div>

    <div id="recent"></div>
		
		<div id="outputWrapper">
			<div id="options">
			<label><input type="checkbox" id="txtRefresh"></input>refresh search every 2 minutes</label>
			</div>

			<div id="output" class="subject"></div>
		</div>		

</asp:Content>
