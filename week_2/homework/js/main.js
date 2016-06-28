var myModule = angular.module('MyApp', []);

myModule.controller('MyController', function () {
  var self = this;

    self.directories = [{folderName: "Folder 1",
            files: ["File 1", "File 2", "File 3"]},
            {folderName: "Folder 2",
            files: ["File 1", "File 2", "File 3"]},
            {folderName: "Folder 3",
            files: ["File 1", "File 2", "File 3"]}];

    self.addFile = function () {
        self.selectedFolder.push(self.newFile);
        self.newFile = "";
    };

});

myModule.controller('ToDoList', function () {
    var self = this;

    self.list = [{item: "Walk Dog", priority: "medium"},
            {item: "Clean Kitchen", priority: "low"},
            {item: "Do Laundry", priority: "high"},
            {item: "Do Homework", priority: "high"}];

    

    self.new = function () {
        self.list.push({item: self.listItem, priority: self.priority});
        self.listItem = "";
    };
});