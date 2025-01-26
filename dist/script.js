// Define the AngularJS module and controller
angular
  .module("project", ["ngMaterial"])
  .controller("TeamController", function ($scope) {
    // Pre-populated data for Admin and Account User
    $scope.adminUsers = [
      {
        name: "Alice Johnson",
        email: "alice.admin@example.com",
        dateAdded: "2023-09-01",
        lastActive: "2023-09-05",
      },
      {
        name: "Alice Johnson",
        email: "alice.admin@example.com",
        dateAdded: "2023-09-01",
        lastActive: "2023-09-05",
      },
      {
        name: "Alice Johnson",
        email: "alice.admin@example.com",
        dateAdded: "2023-09-01",
        lastActive: "2023-09-05",
      },
      {
        name: "Alice Johnson",
        email: "alice.admin@example.com",
        dateAdded: "2023-09-01",
        lastActive: "2023-09-05",
      },
      {
        name: "Alice Johnson",
        email: "alice.admin@example.com",
        dateAdded: "2023-09-01",
        lastActive: "2023-09-05",
      },
      {
        name: "Alice Johnson",
        email: "alice.admin@example.com",
        dateAdded: "2023-09-01",
        lastActive: "2023-09-05",
      },
    ];
    $scope.accountUsers = [
      { name: "Bob Smith", email: "bob.user@example.com" },
    ];

    $scope.newMember = {};

    // Function to add a new member
    $scope.addMember = function () {
      if ($scope.newMember.role === "Admin") {
        $scope.adminUsers.push({
          name: $scope.newMember.name || "New Admin",
          email: $scope.newMember.email,
        });
      } else {
        $scope.accountUsers.push({
          name: $scope.newMember.name || "New Account User",
          email: $scope.newMember.email,
        });
      }
      $scope.newMember = {}; // Clear the form
    };

    // Placeholder functions for edit and delete
    $scope.editUser = function (user) {
      alert("Edit functionality coming soon!");
    };

    $scope.deleteUser = function (user) {
      alert("Delete functionality coming soon!");
    };
    $scope.selectAll = false;

    // Toggle all checkboxes
    $scope.toggleAllCheckboxes = function (selectAll) {
      $scope.adminUsers.forEach(function (user) {
        user.selected = selectAll;
      });
    };
    $scope.toggleAllAccountCheckboxes = function (selectAll) {
      $scope.accountUsers.forEach(function (user) {
        user.selected = selectAll;
      });
    };
  });
