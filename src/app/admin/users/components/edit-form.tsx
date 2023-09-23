import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { User } from "../data/schema";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { plans, roles, statuses } from "../data/data";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Close } from "@radix-ui/react-dialog";
const EditForm = ({
  user,
  onSave,
}: {
  user: User;
  onSave: (updatedUser: User) => void;
}) => {
  const initialValues = {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    plan: user.plan,
    address: user.address,
    status: user.status,
  };

  // Use the user object to initialize the form values
  const [formData, setFormData] = useState(initialValues);

  const handleSave = async () => {
    onSave(formData);
  };
  // Function to handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Edit profile</DialogTitle>
        <DialogDescription>
          Make changes to your profile here. Click save when you're done.
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-3 items-center gap-4">
          <div className="grid grid-cols-1 items-center gap-4">
            <Label htmlFor="id">Id</Label>
            <Input
              type="text"
              id="id"
              name="id"
              value={formData.id}
              disabled
              onChange={handleInputChange}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-1 col-span-2 items-center gap-4">
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="col-span-3"
            />
          </div>
        </div>

        <div className="grid grid-cols-3 items-center gap-4">
          <div className="grid grid-cols-3 items-center gap-4">
            <Label htmlFor="status">Status</Label>
            <Select>
              <SelectTrigger className="col-span-3">
                <SelectValue
                  placeholder={statuses.map((status) =>
                    status.value === user.status ? status.label : ""
                  )}
                />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Status</SelectLabel>
                  {statuses.map((status) => (
                    <SelectItem key={status.value} value={status.value}>
                      {status.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-3 items-center gap-4">
            <Label htmlFor="role">Role</Label>
            <Select>
              <SelectTrigger className="col-span-3 whitespace-nowrap">
                <SelectValue
                  placeholder={roles.map((role) =>
                    role.value === user.role ? role.label : ""
                  )}
                />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Role</SelectLabel>
                  {roles.map((role) => (
                    <SelectItem key={role.value} value={role.value}>
                      {role.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-3 items-center gap-4">
            <Label htmlFor="plan">Plan</Label>
            <Select>
              <SelectTrigger className="col-span-3">
                <SelectValue
                  placeholder={plans.map((plan) =>
                    plan.value === user.plan ? plan.label : ""
                  )}
                />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Plan</SelectLabel>
                  {plans.map((plan) => (
                    <SelectItem key={plan.value} value={plan.value}>
                      {plan.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid grid-cols-3 items-center gap-4">
          <div className="grid grid-cols-1 col-span-2 items-center gap-4">
            <Label htmlFor="email">Email</Label>
            <Input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-2 items-center gap-4">
            <Label htmlFor="address">Address</Label>
            <Input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="col-span-3"
            />
          </div>
        </div>
      </div>
      <DialogFooter>
        <Close asChild>

        <Button onClick={handleSave} type="submit">Save changes</Button>
        </Close>
      </DialogFooter>
    </DialogContent>
  );
};

export default EditForm;
